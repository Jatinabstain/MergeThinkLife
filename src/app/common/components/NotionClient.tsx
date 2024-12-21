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
    no_of_record: number;
}

// Custom hook to fetch Notion data
const useNotionClient = ({ no_of_record }: NotionClientProps) => {
    const [data, setData] = useState<NotionPage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                const response = await fetch(`/api/notion?no_of_record=${no_of_record}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result: NotionPage[] = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data", error);
                // setError(error.message); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, [no_of_record]);

    return { data, loading, error }; // Return data, loading state, and error
};

export default useNotionClient;