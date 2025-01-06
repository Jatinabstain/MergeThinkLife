import React from "react";
import { ArticleItem } from '@/types/articleCardTypes';
import Link from "next/link";
import Image from "next/image";
import placeholder from '../../../../../public/assets/placeholder.jpg';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


type ArticleCardProps = {
    articles: ArticleItem[] | null; // Menu can be an array or null
};
export default function ArticleCard({ articles }: ArticleCardProps) {
    console.log("articles", articles);

    if (!articles || articles.length === 0) {
        return (
            <SkeletonTheme baseColor="#e1e1e1" highlightColor="#f2f2f2">
                <div className="grid items-start gap-[38px] lg:grid-cols-3 md:grid-cols-2">
                    <div className="h-full">
                        <Skeleton height={176} />
                        <div className="article_content">
                            <small><Skeleton width={100} /></small>
                            <h3><Skeleton width={200} /></h3>
                            <div className="flex justify-between items-center">
                                <p className="card_time"><Skeleton width={100} /></p>
                                <button className="btn_outline_small"><Skeleton width={100} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full">
                        <Skeleton height={176} />
                        <div className="article_content">
                            <small><Skeleton width={100} /></small>
                            <h3><Skeleton width={200} /></h3>
                            <div className="flex justify-between items-center">
                                <p className="card_time"><Skeleton width={100} /></p>
                                <button className="btn_outline_small"><Skeleton width={100} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full">
                        <Skeleton height={176} />
                        <div className="article_content">
                            <small><Skeleton width={100} /></small>
                            <h3><Skeleton width={200} /></h3>
                            <div className="flex justify-between items-center">
                                <p className="card_time"><Skeleton width={100} /></p>
                                <button className="btn_outline_small"><Skeleton width={100} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
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
                                    <small>{item.released_date ?? "--"}</small>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="card_time">{item.category ?? "--"}</p>
                                        {/* <small>{item.category ?? "--"}</small> */}
                                        <button className="btn_outline_small">Read More</button>
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
