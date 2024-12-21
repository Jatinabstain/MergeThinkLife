"use client";

import React, { useState } from "react";

type RenderDataType =
    | string
    | number
    | boolean
    | null
    | undefined
    | Array<RenderDataType>
    | { [key: string]: RenderDataType };

    
// Recursive rendering function to display nested data
const renderData = (data: RenderDataType, indentLevel: number = 0) => {
    const indentStyle = { paddingLeft: `${indentLevel * 20}px`, border: '1px solid #ccc', margin: '5px 0', borderRadius: '5px', backgroundColor: '#f9f9f9' };

    if (Array.isArray(data)) {
        return (
            <ul>
                {data.map((item, index) => (
                    <li key={index} style={indentStyle}>
                        {renderData(item, indentLevel + 1)}
                    </li>
                ))}
            </ul>
        );
    } else if (typeof data === "object" && data !== null) {
        return (
            <ul className="mb-3">
                {Object.entries(data).map(([key, value]) => (
                    <li key={key} style={indentStyle}>
                        <strong>{key}:</strong> {renderData(value, indentLevel + 1)}
                    </li>
                ))}
            </ul>
        );
    }
    return <span>{data?.toString()}</span>;
};

export default function NotionClientComponent() {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("api/notion");
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-12">
            <button onClick={fetchData} disabled={loading} className="border border_primary text-white bg_primary py-4 px-9 rounded font-medium block w-fit bg_primary mx-auto">
                {loading ? "Loading..." : "Fetch Notion Data"}
            </button>
            <div style={{ marginTop: "20px" }}>
                {data.length > 0 ? (
                    <div style={{ whiteSpace: "pre-wrap" }}>{renderData(data)}</div>
                ) : (
                    <p>No data available.</p>
                )}
            </div>
        </div>
    );
}