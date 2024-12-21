import { StaticImageData } from "next/image";

export type ArticleItem = {
    id: string;
    title: string;
    date: string;
    content: string;
    time: string;
    href: string;
    image: string|StaticImageData;
};