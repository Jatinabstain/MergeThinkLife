"use client"; // This line makes it a client component

import { useState, useEffect } from "react";

// Define the structure of the data returned from the API
export interface NotionPage {
    id: string;
    title: string;
    name: string;
    released_date: string;
    category: string;
    image_url: string;
    article_url: string;
    href:string;
}

interface NotionClientProps {
    fetchFor: string | null; // Specify what data to fetch
    ArticleId?: string | null; 
}

// Custom hook to fetch Notion data
const useNotionClient = ({ fetchFor , ArticleId }: NotionClientProps) => {
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
                switch (fetchFor) {
                    case "Categories":
                        url = `/api/notion?fetchCategories=categories`;
                        break;
                    case "Article1":
                        url = `/api/notion?no_of_record=3`; // Fetch 3 articles
                        break;
                    case "Article2":
                        url = `/api/notion?no_of_record=0`; // Fetch all articles
                        break;
                    case "SingleArticle":
                        if (ArticleId) {
                            url = `/api/notion?atr_prm=${ArticleId}`; // Fetch single article by ID
                        } else {
                            setError("ArticleId is required for fetching a single article.");
                            return; // Exit early if ArticleId is not provided
                        }
                        break;
                    default:
                        setError("Invalid fetchFor value");
                        return; // Exit early if fetchFor is invalid
                }

                const response = await fetch(url);

                if (!response.ok) {
                    setError(`Error: ${response.statusText}`);
                    return; // Exit early if the response is not ok
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
    }, [fetchFor,ArticleId]);

    return { data, loading, error }; // Return data, loading state, and error
};

export default useNotionClient;