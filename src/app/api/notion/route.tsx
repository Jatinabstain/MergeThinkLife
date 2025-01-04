import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct types

import fs from 'fs';
import path from 'path';

const imagesFolder = path.join(process.cwd(), 'public', 'images');

// Initialize Notion client
const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY }); // Ensure you have your API key in environment variables

// const notion = new Client({ auth: "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" });

// Function to format date from YYYY-MM-DD to DD MMM YYYY
const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(',', ''); // Remove comma for formatting
}

export async function GET(request: Request) {
    const url = new URL(request.url);

    // Get the tag contains categoryOf from the query string
    const fetchForCategory = url.searchParams.get("category");

    // Get the search query from the query string
    const SearchQuery = url.searchParams.get("SearchQuery");

    // New parameter to fetch categories
    const fetchCategories = url.searchParams.get("fetchCategories");

    // Get the no_of_record parameter from the query string
    const no_of_record_url = url.searchParams.get("no_of_record");
    const no_of_record = no_of_record_url ? parseInt(no_of_record_url, 10) : null;

    const fetch_art = url.searchParams.get("fetch_art");
    try {
        // const databaseId = "YOUR_DATABASE_ID"; // Replace with your actual database ID
        const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
        if (!databaseId) {
            throw new Error("Database ID is not defined in environment variables");
        }

        let response;
        // If fetch_art is provided, fetch the specific article by ID
        if (fetch_art) {
            const articleResponse = await fetchArticleById(fetch_art);
            return new Response(JSON.stringify(articleResponse), { status: 200 });
        }


        // If ID is provided, fetch the specific article
        if (fetchForCategory) {
            response = '';
            // Fetch all pages from the Notion database
            response = await notion.databases.query({
                database_id: databaseId,
                filter: {
                    property: "Tags",
                    multi_select: {
                        contains: formatString(fetchForCategory)
                    }
                }
            });
        }
        else if (no_of_record) {
            response = '';
            // Fetch 'no_of_record' pages from the Notion database
            response = await notion.databases.query({
                database_id: databaseId,
                page_size: no_of_record,
                filter: {
                    property: "Status",
                    status: {
                        equals: "Published"
                    }
                }
            });
        }

        else if (SearchQuery) {
            response = '';
            // Fetch 'SearchQuery' pages from the Notion database
            response = await notion.databases.query({
                database_id: databaseId,
                filter: {
                    property: 'Name',
                    title: {
                        contains: SearchQuery
                    }
                }
            });
        }
        else {
            response = '';
            // Fetch all pages from the Notion database
            response = await notion.databases.query({
                database_id: databaseId,
            });
        }



        // Handle fetching a specific article by ID : SingleArticle
        // if (fetch_art) {
        //     const articles = response.results as PageObjectResponse[]; // Cast to PageObjectResponse array

        //     // Filter the articles to find the one with the matching ID
        //     const SingleArticle = articles.find(page => page.id === fetch_art);

        //     if (SingleArticle) {
        //         const properties = SingleArticle.properties;

        //         // Extract article details
        //         let title = "Untitled";
        //         let released_date: string | null = null;
        //         let category: string[] = [];
        //         let image_url: string | null = null;

        //         // Fetch Title Name
        //         if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
        //             const richTextItem = properties.Name.title[0]; // Get the first rich text item
        //             if ('text' in richTextItem) { // Check if it has a 'text' property
        //                 title = richTextItem.text.content; // Access the text content
        //             }
        //         }

        //         // Fetch Released Date
        //         if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
        //             released_date = formatDate(properties.Date.date.start); // Format the date
        //         }

        //         // Fetch Categories
        //         if (properties.Tags && properties.Tags.type === 'multi_select') {
        //             category = properties.Tags.multi_select.map(tag => tag.name); // Get the names of the tags
        //         }


        //         // Fetch Image URL
        //         if (SingleArticle.cover && SingleArticle.cover.type === 'file' && SingleArticle.cover.file) {
        //             image_url = SingleArticle.cover.file.url; // Get the image URL
        //         }

        //         // Return the article details
        //         return new Response(JSON.stringify({
        //             id: SingleArticle.id,
        //             title,
        //             released_date,
        //             category: category.join(', '), // Join categories into a string
        //             image_url,
        //         }), { status: 200 });
        //     } else {
        //         return new Response("Article not found.", { status: 404 });
        //     }
        // }



        // Fetch All Categoruies
        if (fetchCategories) {
            const categories = response.results.flatMap((page, index) => {
                const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
                const properties = pageObject.properties;

                // Fetch Categories
                if (properties.Tags && properties.Tags.type === 'multi_select') {
                    return properties.Tags.multi_select.map(tag => ({
                        id: index + 1, // Use the index from the flatMap
                        href: `${tag.name.replace(/\s+/g, '-').toLowerCase()}`, // Create href by replacing spaces with dashes and converting to lowercase
                        name: tag.name // Get the category name
                    }));
                }
                return [];
            });

            // Get unique categories based on name
            const uniqueCategories = Array.from(new Map(categories.map(item => [item.name, item])).values());
            return new Response(JSON.stringify(uniqueCategories), { status: 200 });
        }

        // Your existing logic to handle articles or other data
        const articles = response.results

            // Filter  for Green Status
            .filter((page) => {
                if ('properties' in page) {
                    const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
                    const properties = pageObject.properties;

                    // Check if Status property exists and is of type 'status'
                    if (properties.Status && properties.Status.type === 'status') {
                        const statusOptions = properties.Status.status;
                        return statusOptions && statusOptions.color === 'green';
                    }
                }
                return false; // Exclude pages that do not meet the criteria
            })

            // Maping array for Articles 
            .map((page, index) => {

                // Cast to PageObjectResponse
                const pageObject = page as PageObjectResponse;
                const properties = pageObject.properties;

                // Default title
                let title = "Untitled";

                // Default released_date
                let released_date: string | null = null;

                // Explicitly typed as string array
                let category: string[] = [];

                // Default image_url
                let image_url: string | null = null;

                // Get the article URL
                const Object_url = pageObject.url;
                const article_url = Object_url.split('/').pop();

                // Fetch Title Name
                if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
                    const richTextItem = properties.Name.title[0]; // Get the first rich text item
                    if ('text' in richTextItem) { // Check if it has a 'text' property
                        title = richTextItem.text.content; // Access the text content
                    }
                }

                // Fetch Released Date
                if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
                    released_date = formatDate(properties.Date.date.start); // Format the date
                }

                // Fetch Categories
                if (properties.Tags && properties.Tags.type === 'multi_select') {
                    category = properties.Tags.multi_select.map(tag => tag.name); // Get the names of the tags
                }

                // Fetch Image URL
                const fileName = `${pageObject.id}.jpg`; // Adjust extension if necessary
                const filePath = path.join(imagesFolder, fileName);
                if (fs.existsSync(filePath)) {
                    image_url = `/images/${fileName}`;
                }else{
                    if (pageObject.cover && pageObject.cover.type === 'file' && pageObject.cover.file) {
                        image_url = pageObject.cover.file.url; // Get the image URL
                    }
                }
                let server_image_url = '';
                if (pageObject.cover && pageObject.cover.type === 'file' && pageObject.cover.file) {
                    server_image_url = pageObject.cover.file.url; // Get the image URL
                }

                return {
                    serialNo: index + 1, // Add serial number (1-based index)
                    id: pageObject.id,
                    title: title,
                    released_date: released_date,
                    category: category.join(', '), // Join categories into a string
                    image_url: image_url,
                    server_image_url: server_image_url,
                    article_url: article_url,
                    page: pageObject,
                    content:"no_of_record" // Add the processed HTML content
                };
            });

        // If no_of_record is provided, slice the results
        // if (no_of_record) {
        //     return new Response(JSON.stringify(articles.slice(0, no_of_record)), { status: 200 });
        // }


        return new Response(JSON.stringify(articles), { status: 200 }); // Return articles as JSON response
    } catch (error) {
        console.error("Error fetching data from Notion:", error);
        return new Response("Error fetching data", { status: 500 }); // Handle errors
    }
}

function formatString(fetchForCategory: string): string {
    return fetchForCategory
        .split('-') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join the words with spaces
}


// Function to fetch a specific article by ID
async function fetchArticleById(articleId: string) {
    try {
        const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
        if (!databaseId) {
            throw new Error("Database ID is not defined in environment variables");
        }
        // Fetch the page details
        const page = await notion.pages.retrieve({ page_id: articleId });

        // const properties = singleArticle.properties;
        const pageObject = page as PageObjectResponse;
        const properties = pageObject.properties;


        // Extract article details
        let title = "Untitled";
        let released_date: string | null = null;
        let category: string[] = [];
        let image_url: string | null = null;

        // Fetch Title Name
        if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
            const richTextItem = properties.Name.title[0]; // Get the first rich text item
            if ('text' in richTextItem) { // Check if it has a 'text' property
                title = richTextItem.text.content; // Access the text content
            }
        }

        // Fetch Released Date
        if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
            released_date = formatDate(properties.Date.date.start); // Format the date
        }

        // Fetch Categories
        if (properties.Tags && properties.Tags.type === 'multi_select') {
            category = properties.Tags.multi_select.map(tag => tag.name); // Get the names of the tags
        }

        // Fetch Image URL
        if ('cover' in pageObject && pageObject.cover && pageObject.cover.type === 'file' && pageObject.cover.file) {
            image_url = pageObject.cover.file.url; // Get the image URL
        }

        // Fetch child blocks (page content)
        const childBlocks = await notion.blocks.children.list({
            block_id: page.id,
            page_size: 100, // Adjust page size as needed
        });
        const childBlocksResponse = childBlocks.results;

        // Process child blocks and generate HTML content
        const filteredChildBlocks = childBlocksResponse.filter((block): block is BlockObjectResponse => 'type' in block);
        const htmlContent = processChildBlocks(filteredChildBlocks);


        // Return the article details
        return {
            id: page.id,
            title,
            released_date,
            category: category.join(', '), // Join categories into a string
            image_url,
            content: htmlContent, // Add the processed HTML content
        };
    } catch (error) {
        console.error("Error fetching article by ID:", error);
        throw error; // Re-throw the error to handle it in the main function
    }
}

// Function to process child blocks and return HTML content
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct type

function processChildBlocks(childBlocks: BlockObjectResponse[]): string {
    return childBlocks
        .map((block) => parseBlockContent(block)) // Parse each block
        .join(''); // Join all HTML content into a single string
}
// Function to parse Notion blocks and return HTML content
function parseBlockContent(block: BlockObjectResponse): string {
    if ('type' in block) {
        switch (block.type) {
            case 'paragraph':
                return `<p>${block.paragraph.rich_text.map(text => text.plain_text).join(' ')}</p>`;
            case 'heading_1':
                return `<h1>${block.heading_1.rich_text.map(text => text.plain_text).join(' ')}</h1>`;
            case 'heading_2':
                return `<h2>${block.heading_2.rich_text.map(text => text.plain_text).join(' ')}</h2>`;
            case 'heading_3':
                return `<h3>${block.heading_3.rich_text.map(text => text.plain_text).join(' ')}</h3>`;
            case 'bulleted_list_item':
                return `<li>${block.bulleted_list_item.rich_text.map(text => text.plain_text).join(' ')}</li>`;
            case 'numbered_list_item':
                return `<li>${block.numbered_list_item.rich_text.map(text => text.plain_text).join(' ')}</li>`;
            case 'image':
                const imageUrl = block.image.type === 'file' ? block.image.file.url : block.image.external.url;
                return `<img src="${imageUrl}" alt="${block.image.caption?.map(text => text.plain_text).join(' ') || ''}" />`;
            case 'quote':
                return `<blockquote>${block.quote.rich_text.map(text => text.plain_text).join(' ')}</blockquote>`;
            case 'code':
                return `<pre><code>${block.code.rich_text.map(text => text.plain_text).join(' ')}</code></pre>`;
            case 'divider':
                return `<hr />`;
            // Add more cases as needed for other block types
            default:
                return '';
        }
    }
    return '';
}

