import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Initialize Notion client
const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

// Function to format date from YYYY-MM-DD to DD MMM YYYY
const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(',', '');
};

// Function to format string (e.g., "some-category" to "Some Category")
const formatString = (fetchForCategory: string): string => {
    return fetchForCategory
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Function to fetch data from Notion database based on category
const fetchDataByCategory = async (databaseId: string, fetchForCategory: string) => {
    return await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Tags",
            multi_select: {
                contains: formatString(fetchForCategory)
            }
        }
    });
};

// Function to fetch a specific number of records
const fetchDataByRecordCount = async (databaseId: string, no_of_record: number) => {
    return await notion.databases.query({
        database_id: databaseId,
        page_size: no_of_record,
        filter: {
            property: "Status",
            status: {
                equals: "Published"
            }
        }
    });
};

// Function to fetch data based on search query
const fetchDataBySearchQuery = async (databaseId: string, SearchQuery: string) => {
    return await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Name',
            title: {
                contains: SearchQuery
            }
        }
    });
};

// Function to fetch all data from the database
const fetchAllData = async (databaseId: string) => {
    return await notion.databases.query({
        database_id: databaseId,
    });
};

// Function to fetch a specific article by ID
const fetchSingleArticle = (articles: PageObjectResponse[], fetch_art: string) => {
    const SingleArticle = articles.find(page => page.id === fetch_art);

    if (!SingleArticle) {
        return null;
    }

    const properties = SingleArticle.properties;

    let title = "Untitled";
    let released_date: string | null = null;
    let category: string[] = [];
    let image_url: string | null = null;

    // Fetch Title Name
    if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
        const richTextItem = properties.Name.title[0];
        if ('text' in richTextItem) {
            title = richTextItem.text.content;
        }
    }

    // Fetch Released Date
    if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
        released_date = formatDate(properties.Date.date.start);
    }

    // Fetch Categories
    if (properties.Tags && properties.Tags.type === 'multi_select') {
        category = properties.Tags.multi_select.map(tag => tag.name);
    }

    // Fetch Image URL
    if (SingleArticle.cover && SingleArticle.cover.type === 'file' && SingleArticle.cover.file) {
        image_url = SingleArticle.cover.file.url;
    }

    return {
        id: SingleArticle.id,
        title,
        released_date,
        category: category.join(', '),
        image_url,
    };
};

// Function to fetch all unique categories
const fetchAllCategories = (response: { results: PageObjectResponse[] }) => {
    const categories = response.results.flatMap((page: PageObjectResponse, index: number) => {
        const properties = page.properties;

        if (properties.Tags && properties.Tags.type === 'multi_select') {
            return properties.Tags.multi_select.map(tag => ({
                id: index + 1,
                href: `${tag.name.replace(/\s+/g, '-').toLowerCase()}`,
                name: tag.name
            }));
        }
        return [];
    });

    return Array.from(new Map(categories.map(item => [item.name, item])).values());
};

// Main GET function to handle requests
export async function GET(request: Request) {
    const url = new URL(request.url);
    const fetchForCategory = url.searchParams.get("category");
    const SearchQuery = url.searchParams.get("SearchQuery");
    const fetchCategories = url.searchParams.get("fetchCategories");
    const no_of_record_url = url.searchParams.get("no_of_record");
    const no_of_record = no_of_record_url ? parseInt(no_of_record_url, 10) : null;
    const fetch_art = url.searchParams.get("fetch_art");

    try {
        const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
        if (!databaseId) {
            throw new Error("Database ID is not defined in environment variables");
        }

        let response;
        if (fetchForCategory) {
            response = await fetchDataByCategory(databaseId, fetchForCategory);
        } else if (no_of_record) {
            response = await fetchDataByRecordCount(databaseId, no_of_record);
        } else if (SearchQuery) {
            response = await fetchDataBySearchQuery(databaseId, SearchQuery);
        } else {
            response = await fetchAllData(databaseId);
        }

        if (fetch_art) {
            const articles = response.results as PageObjectResponse[];
            const articleDetails = fetchSingleArticle(articles, fetch_art);
            if (articleDetails) {
                return new Response(JSON.stringify(articleDetails), { status: 200 });
            } else {
                return new Response("Article not found.", { status: 404 });
            }
        }

        if (fetchCategories) {
            const filteredResults = response.results.filter((result): result is PageObjectResponse => 'properties' in result);
            const uniqueCategories = fetchAllCategories({ results: filteredResults });
            return new Response(JSON.stringify(uniqueCategories), { status: 200 });
        }

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
                if (pageObject.cover && pageObject.cover.type === 'file' && pageObject.cover.file) {
                    image_url = pageObject.cover.file.url; // Get the image URL
                }

                return {
                    serialNo: index + 1, // Add serial number (1-based index)
                    id: pageObject.id,
                    title: title,
                    released_date: released_date,
                    category: category,
                    image_url: image_url,
                    article_url: article_url,
                    // page: pageObject,
                    // no_of_record:no_of_record
                };
            });

        return new Response(JSON.stringify(articles), { status: 200 });
    } catch (error) {
        console.error("Error fetching data from Notion:", error);
        return new Response("Error fetching data", { status: 500 });
    }
}