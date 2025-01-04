"use client"; // This line makes it a client component

import { useState, useEffect,useRef } from "react";

// Define the structure of the data returned from the API
export interface NotionPage {
    id: string;
    title: string;
    name: string;
    released_date: string;
    category: string;
    image_url: string;
    server_image_url: string;
    article_url: string;
    href: string;
    content: string | null;
}

interface NotionClientProps {
    fetchFor: string | null; // Specify what data to fetch
    toFetch?: string | null;
}

// Custom hook to fetch Notion data
const useNotionClient = ({ fetchFor, toFetch }: NotionClientProps) => {
    const [data, setData] = useState<NotionPage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const saveImageCalledRef = useRef<boolean>(false); // Tracks if saveImage was already called

    useEffect(() => {
        const saveImage = async (result: { id: string; image_url: string }[]) => {
            await fetch('/api/saveimages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pages: result }),
            });

        }
        console.log("fetchFor", fetchFor);
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
                    case "CategoryArticle":
                        if (toFetch) {
                            url = `/api/notion?category=${toFetch}`; // Fetch article by Category
                        } else {
                            url = `/api/notion?no_of_record=0`; // Fetch all articles
                        }
                        break;
                    case "Popular":
                        url = `/api/notion?no_of_record=3`; // Fetch 3 articles
                        break;
                    case "SearchQuery":
                        url = `/api/notion?SearchQuery=${toFetch}`; // Released Article 2
                        break;
                    case "SliderArticles":
                        url = `/api/notion?no_of_record=2`; // Fetch 2 articles
                        break;
                    case "PaginatedArticles":
                        url = `/api/notion?no_of_record=0`; // Fetch all articles
                        break;
                    case "SingleArticle":
                        if (toFetch) {
                            url = `/api/notion?fetch_art=${toFetch}`; // Fetch single article by ID
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

                // Ensure saveImage runs only once per page
                if (!saveImageCalledRef.current && Array.isArray(result)) {
                    const filteredResult = result
                        .filter((page) => page.server_image_url )
                        .map((page) => ({
                            id: page.id,
                            image_url: page.server_image_url    ,
                        }));

                    saveImage(filteredResult);
                    saveImageCalledRef.current = true; // Mark as executed
                }


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
    }, [fetchFor, toFetch]);

    return { data, loading, error }; // Return data, loading state, and error
};

export default useNotionClient;