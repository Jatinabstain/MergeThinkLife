// import { Client } from "@notionhq/client";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct types

// export async function GET() {
//     const notion = new Client({ auth: "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" });

//     try {
//         const databaseId = "15bb24f4-b447-807d-8e7c-e1f8aa6ce4e0";

//         // Check if databaseId is defined
//         if (!databaseId) {
//             throw new Error("Database ID is not defined in the environment variables.");
//         }

//         const response = await notion.databases.query({ database_id: databaseId });

//         const results = response.results
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

//                 // Fetch Released Date
//                 if (properties.Date && properties.Date.type === 'date' && properties.Date.date) {
//                     released_date = properties.Date.date.start; // Get the start date
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

//         return new Response(JSON.stringify(results), { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
//     }
// }


import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"; // Import the correct types

export async function GET(request: Request) {
    const notion = new Client({ auth: "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" });

    const url = new URL(request.url);
    const no_of_record = url.searchParams.get("no_of_record"); // Get the no_of_record parameter from the query string

    try {
        const databaseId = "15bb24f4-b447-807d-8e7c-e1f8aa6ce4e0";

        // Check if databaseId is defined
        if (!databaseId) {
            throw new Error("Database ID is not defined in the environment variables.");
        }

        const response = await notion.databases.query({
            database_id: databaseId,
        });

        const results = response.results
            .filter((page) => {
                // Type guard to check if page is a PageObjectResponse
                if ('properties' in page) {
                    const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
                    const properties = pageObject.properties;

                    // Check if Status property exists and is of type 'status'
                    if (properties.Status && properties.Status.type === 'status') {
                        const statusOptions = properties.Status.status;
                        // Check if the status color is green
                        return statusOptions && statusOptions.color === 'green';
                    }
                }
                return false; // Exclude pages that do not meet the criteria
            })
            .map((page, index) => {
                const pageObject = page as PageObjectResponse; // Cast to PageObjectResponse
                const properties = pageObject.properties;

                let title = "Untitled"; // Default title
                let released_date: string | null = null; // Default released_date
                let category: string[] = []; // Explicitly typed as string array
                let image_url: string | null = null; // Default image_url
                const Object_url = pageObject.url; // Get the article URL
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
                    released_date = properties.Date.date.start; // Get the start date
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
            return new Response(JSON.stringify(results.slice(0, limit)), { status: 200 });
        }

        // If no_of_record is null, return all results
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        console.error("Error fetching data from Notion:", error); // Log the error for debugging
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
    }
}