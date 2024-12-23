// import { Client } from "@notionhq/client";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct types



// // Function to format date from YYYY-MM-DD to DD MMM YYYY
// const formatDate = (dateString: string): string => {
//     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', options).replace(',', ''); // Remove comma for formatting
// }

// export async function GET(request: Request) {
//     const notion = new Client({ auth: "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" });

//     const url = new URL(request.url);
//     const no_of_record = url.searchParams.get("no_of_record"); // Get the no_of_record parameter from the query string

//     const categoryOf = url.searchParams.get("category"); // Get the tag contains categoryOf from the query string


//     try {
//         const databaseId = "15bb24f4-b447-807d-8e7c-e1f8aa6ce4e0";

//         // Check if databaseId is defined
//         if (!databaseId) {
//             throw new Error("Database ID is not defined in the environment variables.");
//         }

//         const response = await notion.databases.query({
//             database_id: databaseId,
//             filter: categoryOf
//             ? {
//                 property: "Tags",
//                 multi_select: {
//                     contains: categoryOf // Filter by value in categoryOf
//                 }
//             }
//             : undefined // If categoryOf is empty or falsy, don't apply any filter
//         });

//         const results = response.results
//         // check if status is green
//             .filter((page) => {
//                 // Type guard to check if page is a PageObjectResponse
//                 if ('properties' in page) {
//                     const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
//                     const properties = pageObject.properties;

//                     // Check if Status property exists and is of type 'status'
//                     if (properties.Status && properties.Status.type === 'status') {
//                         const statusOptions = properties.Status.status;
//                         // Check if the status color is green
//                         return statusOptions && statusOptions.color === 'green';
//                     }
//                 }
//                 return false; // Exclude pages that do not meet the criteria
//             })
//             .map((page, index) => {
//                 const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
//                 const properties = pageObject.properties;

//                 let title = "Untitled"; // Default title
//                 let released_date: string | null = null; // Default released_date
//                 let category: string[] = []; // Explicitly typed as string array
//                 let image_url: string | null = null; // Default image_url
//                 const Object_url = pageObject.url; // Get the article URL
//                 const article_url = Object_url.split('/').pop();

//                 // Fetch Title Name
//                 if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
//                     const richTextItem = properties.Name.title[0]; // Get the first rich text item
//                     if ('text' in richTextItem) { // Check if it has a 'text' property
//                         title = richTextItem.text.content; // Access the text content
//                     }
//                 }

//                  // Fetch Released Date
//                 if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
//                     released_date = formatDate(properties.Date.date.start); // Format the date
//                 }

//                 // Fetch Categories
//                 if (properties.Tags && properties.Tags.type === 'multi_select') {
//                     category = properties.Tags.multi_select.map(tag => tag.name); // Get the names of the tags
//                 }

//                 // Fetch Image URL
//                 if (pageObject.cover && pageObject.cover.type === 'file' && pageObject.cover.file) {
//                     image_url = pageObject.cover.file.url; // Get the image URL
//                 }

//                 return {
//                     serialNo: index + 1, // Add serial number (1-based index)
//                     id: pageObject.id,
//                     title: title,
//                     released_date: released_date,
//                     category: category,
//                     image_url: image_url,
//                     article_url: article_url,
//                     page: pageObject,
//                 };
//             });

//         // If no_of_record is provided, slice the results
//         if (no_of_record == '3') {
//             const limit = parseInt(no_of_record, 10);
//             return new Response(JSON.stringify(results.slice(0, limit)), { status: 200 });
//         }

//         // If no_of_record is null, return all results
//         return new Response(JSON.stringify(results), { status: 200 });
//     } catch (error) {
//         console.error("Error fetching data from Notion:", error); // Log the error for debugging
//         return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
//     }
// }



// #################################################################

import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct types

// Initialize Notion client
// const notion = new Client({ auth: process.env.NOTION_API_KEY }); // Ensure you have your API key in environment variables

    const notion = new Client({ auth: "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" });

// Function to format date from YYYY-MM-DD to DD MMM YYYY
const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(',', ''); // Remove comma for formatting
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    
    // Get the tag contains categoryOf from the query string
    const categoryOf = url.searchParams.get("category"); 
    
    // New parameter to fetch categories
    const fetchCategories = url.searchParams.get("fetchCategories"); 

    // Get the no_of_record parameter from the query string
    const no_of_record = url.searchParams.get("no_of_record"); 


    try {
        // const databaseId = "YOUR_DATABASE_ID"; // Replace with your actual database ID
        const databaseId = "15bb24f4-b447-807d-8e7c-e1f8aa6ce4e0";


        // Fetch all pages from the Notion database
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: categoryOf
                ? {
                    property: "Tags",
                    multi_select: {
                        contains: categoryOf // Filter by value in categoryOf
                    }
                }
                : undefined // If categoryOf is empty or falsy, don't apply any filter
        });

        if (fetchCategories) {
            const categories = response.results.flatMap((page, index) => {
                const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
                const properties = pageObject.properties;
        
                // Fetch Categories
                if (properties.Tags && properties.Tags.type === 'multi_select') {
                    return properties.Tags.multi_select.map(tag => ({
                        index: index + 1, // Use the index from the flatMap
                        href: "?category="+`${tag.name.replace(/\s+/g, '-').toLowerCase()}`, // Create href by replacing spaces with dashes and converting to lowercase
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

            // Filter  for Status
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
                const pageObject                    =   page as PageObjectResponse; 
                const properties                    =   pageObject.properties;

                // Default title
                let title                           =   "Untitled"; 
                
                // Default released_date
                let released_date: string | null    =   null; 
                
                // Explicitly typed as string array
                let category: string[]              =   []; 
                
                // Default image_url
                let image_url: string | null        =   null; 
                
                // Get the article URL
                const Object_url                    =   pageObject.url; 
                const article_url                   =   Object_url.split('/').pop();

                // Fetch Title Name
                if (properties.Name && properties.Name.type === 'title' && properties.Name.title.length > 0) {
                    const richTextItem  =   properties.Name.title[0]; // Get the first rich text item
                    if ('text' in richTextItem) { // Check if it has a 'text' property
                        title   =   richTextItem.text.content; // Access the text content
                    }
                }

                // Fetch Released Date
                if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
                    released_date   =   formatDate(properties.Date.date.start); // Format the date
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
                    page: pageObject,
                };
            });
            
            // If no_of_record is provided, slice the results
            if (no_of_record == '3') {
                const limit = parseInt(no_of_record, 10);
                return new Response(JSON.stringify(articles.slice(0, limit)), { status: 200 });
            }


        return new Response(JSON.stringify(articles), { status: 200 }); // Return articles as JSON response
    } catch (error) {
        console.error("Error fetching data from Notion:", error);
        return new Response("Error fetching data", { status: 500 }); // Handle errors
    }
}