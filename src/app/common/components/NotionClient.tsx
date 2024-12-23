// import { useState, useEffect } from "react";

// // Define the structure of the data returned from the API
// export interface NotionPage { // Export the interface
//     id: string;
//     title: string;
//     released_date: string;
//     category: string;
//     image_url: string;
//     article_url: string;
// }

// interface NotionClientProps {
//     no_of_record: number;
// }

// const NotionClient = ({ no_of_record }: NotionClientProps) => {
//     const [data, setData] = useState<NotionPage[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`/api/notion?no_of_record=${no_of_record}`);
//                 const result: NotionPage[] = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error("Failed to fetch data", error);
//             }
//         };

//         fetchData();
//     }, [no_of_record]);

//     return data; // Return the fetched data
// };

// export default NotionClient;




// import { useState, useEffect } from "react";

// // Define the structure of the data returned from the API
// export interface NotionPage {
//     id: string;
//     title: string;
//     released_date: string;
//     category: string;
//     image_url: string;
//     article_url: string;
// }

// interface NotionClientProps {
//     no_of_record: number | null;
//     fetchCategories: number | null;
// }

// // Custom hook to fetch Notion data
// const useNotionClient = ({ no_of_record , fetchCategories }: NotionClientProps) => {
//     const [data, setData] = useState<NotionPage[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             setError(null); // Reset error state before fetching
//             try {
//                 let response : string[] ;
                
//                 if(fetchCategories){
//                     response = await fetch(`/api/notion?fetchCategories=${fetchCategories}`);
//                 }else{
//                     response = await fetch(`/api/notion?no_of_record=${no_of_record}`);
                    
//                 }

//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const result: NotionPage[] = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error("Failed to fetch data", error);
//                 // setError(error.message); // Set error message
//             } finally {
//                 setLoading(false); // Set loading to false after fetching
//             }
//         };

//         fetchData();
//     }, [no_of_record]);

//     return { data, loading, error }; // Return data, loading state, and error
// };

// export default useNotionClient;


"use client"; // This line makes it a client component

import { useState, useEffect } from "react";

// Define the structure of the data returned from the API
export interface NotionPage {
    id: string;
    title: string;
    released_date: string;
    category: string;
    image_url: string;
    article_url: string;
}

interface NotionClientProps {
    fetchFor: string | null; // Specify what data to fetch
}

// Custom hook to fetch Notion data
const useNotionClient = ({ fetchFor }: NotionClientProps) => {
    const [data, setData] = useState<NotionPage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                let url: string;

                // Determine the URL based on the fetchFor value
                if (fetchFor === "Categories") {
                    url = `/api/notion?fetchCategories=categories`;
                } else if (fetchFor === "Article1") {
                    url = `/api/notion?no_of_record=3`; // Fetch 3 articles
                } else if (fetchFor === "Article2") {
                    url = `/api/notion?no_of_record=0`; // Fetch all articles
                } else {
                    throw new Error("Invalid fetchFor value");
                }

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result: NotionPage[] = await response.json();
                setData(result);
            } catch (error) { // Use 'unknown' for error handling
                console.error("Failed to fetch data", error);
                if (error instanceof Error) {
                    setError(error.message); // Set error message if it's an instance of Error
                } else {
                    setError("An unknown error occurred."); // Fallback for unknown errors
                }
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, [fetchFor]);

    return { data, loading, error }; // Return data, loading state, and error
};

export default useNotionClient;