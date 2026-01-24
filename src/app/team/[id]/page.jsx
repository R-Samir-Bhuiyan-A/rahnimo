"use client";

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React, { useRef, useEffect } from 'react';
import useAxios from '../../../hooks/useAxios';
import Image from 'next/image';
import Skeleton from '../../../components/ui/Skeleton';
import ErrorState from '../../../components/ui/ErrorState';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { FadeInStagger, FadeInItem } from '../../../components/animations/FadeInStagger';
import { useInView } from 'framer-motion';

const GalleryItem = ({ src }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm');

    // Auto-play video when in the middle of the screen
    const isInView = useInView(containerRef, {
        margin: "-25% 0px -25% 0px",
        amount: 0.5
    });

    useEffect(() => {
        if (!isVideo || !videoRef.current) return;

        if (isInView) {
            videoRef.current.play().catch(e => console.log("Video auto-play failed", e));
        } else {
            videoRef.current.pause();
        }
    }, [isInView, isVideo]);

    return (
        <FadeInItem className="break-inside-avoid mb-4">
            <div
                ref={containerRef}
                className="relative rounded-2xl overflow-hidden group bg-muted"
            >
                {isVideo ? (
                    <>
                        <video
                            ref={videoRef}
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover"
                            src={src}
                        />
                    </>
                ) : (
                    <Image
                        src={src}
                        width={500}
                        height={500}
                        alt="Gallery Item"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        loading='lazy'
                    />
                )}
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </FadeInItem>
    );
};

const TeamDeatils = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()

    const { data: member = {}, isLoading, isError, refetch } = useQuery({
        queryKey: ["team", id],
        queryFn: async () => {
            const endpoint = `/admin/team/${id}?t=${new Date().getTime()}`;
            const res = await axiosInstance.get(endpoint, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            })
            return res.data?.member || {}
        }
    })

    if (isError) return <div className='mx-2 ml-6 md:mx-20 my-10 md:my-28'><ErrorState onRetry={() => refetch()} message="Failed to load team member details." /></div>

    if (isLoading) {
        return (
            <div className='mx-2 ml-6  md:mx-20 my-10 md:my-28'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 '>
                    <div className='order-1 md:order-2 flex flex-col gap-5'>
                        <Skeleton className="w-full h-[400px] rounded-xl" />
                        <Skeleton className="w-2/3 h-8" />
                        <Skeleton className="w-1/2 h-8" />
                    </div>
                    <div className='order-2 md:order-1 space-y-4'>
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="w-full h-4" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='min-h-screen'>
            {/* Profile Section - Wider Container */}
            <div className='max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 my-10 md:my-28'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 mb-20 items-start'>
                    <div className='order-1 md:order-2 flex flex-col gap-6 sticky top-32'>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src={member?.image}
                                width={800}
                                height={1000}
                                alt={member?.name || "Team Member"}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        <div>
                            <h1 className='font-bold text-primary text-4xl md:text-5xl tracking-widest font-montserrat'>
                                {member?.name}
                            </h1>
                            <h2 className='font-semibold text-muted-foreground text-sm tracking-[0.25em] font-montserrat uppercase mt-3 pl-1'>
                                {member?.designation || member?.role}
                            </h2>
                        </div>
                    </div>

                    <div className='order-2 md:order-1 pt-4'>
                        {/* Description Content */}
                        <div className='prose prose-lg dark:prose-invert max-w-none text-muted-foreground'>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkBreaks]}
                                components={{
                                    p: ({ node, ...props }) => <p className="mb-6 leading-relaxed text-lg" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                                    em: ({ node, ...props }) => <em className="italic text-foreground" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-3 mb-6" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-3 mb-6" {...props} />,
                                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-foreground/80 bg-secondary/30 p-6 rounded-r-lg" {...props} />
                                    ),
                                }}
                            >
                                {member?.description}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section - Full Width Background */}
            {member?.gallery && member.gallery.length > 0 && (
                <div className="w-full bg-secondary/20 border-t border-border py-20">
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-widest uppercase mb-4">
                                Highlights
                            </h3>
                            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                        </div>

                        <FadeInStagger className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                            {member.gallery.map((item, index) => (
                                <GalleryItem key={index} src={item} />
                            ))}
                        </FadeInStagger>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamDeatils;