export type AccordionItem = {
    title: string;
    content: string;
    id: string; // Ensure each item has a unique id
    active?: boolean;
};