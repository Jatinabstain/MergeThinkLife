import React from "react";
import { ArticleItem } from '@/types/articleCardTypes';
import Link from "next/link";
import Image from "next/image";
import placeholder from '../../../../../public/assets/placeholder.jpg';
import Loader from '../loader/loader';

type ArticleCardProps = {
    articles: ArticleItem[] | null; // articles can be an array or null
};
export default function ArticleCard({ articles }: ArticleCardProps) {
    if (!articles || articles.length === 0) {
        return (
            <Loader />
        );
    } else {
        return (
            <div className="grid items-start gap-[38px] lg:grid-cols-3 md:grid-cols-2">
                {articles.map((item) => (
                    <div key={item.id} className="h-full">
                        {/* <Link href={'/article?atr_prm=' + item.id}> */}
                        <Link href={'/article/' + item.article_url}>
                            <div className="article_card">
                                <div className="position-relative">
                                    {item.image_url && item.image_url.length > 0 ? (
                                        <Image src={item.image_url} alt="" className="article_image" width={387} height={176} />
                                    ) : (
                                        <div className="article_image_placeholder"> <Image src={placeholder} alt="" className="article_image" width={387} height={176} />
                                        </div>
                                    )}
                                </div>
                                <div className="article_content">
                                    <small>{item.released_date ?? "-- --- ----"}</small>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="card_time"></p>
                                        {item.category && (
                                            <button className="btn_outline_small">{item.category ?? " "}</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}
