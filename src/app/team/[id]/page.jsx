"use client";

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import useAxios from '../../../hooks/useAxios';
import Image from 'next/image';
import Skeleton from '../../../components/ui/Skeleton';
import ErrorState from '../../../components/ui/ErrorState';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const TeamDeatils = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()

    const { data: member = {}, isLoading, isError, refetch } = useQuery({
        queryKey: ["team", id],
        queryFn: async () => {
            const endpoint = `/admin/team/${id}?t=${new Date().getTime()}`;
            console.log("Fetching URL:", endpoint);

            const res = await axiosInstance.get(endpoint, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            })
            console.log("API Response Headers:", JSON.stringify(res.headers, null, 2));
            console.log("API Response Data:", JSON.stringify(res.data?.member, null, 2));
            return res.data?.member || {}
        }
    })

    if (isError) return <div className='mx-2 ml-6 md:mx-20 my-10 md:my-28'><ErrorState onRetry={() => refetch()} message="Failed to load team member details." /></div>

    console.log(member)
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
        <div className='mx-2 ml-6  md:mx-20 my-10 md:my-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 '>
                <div className='order-1 md:order-2 flex flex-col gap-5'>
                    <Image
                        src={member?.image}
                        width={200}
                        height={200}
                        alt="image"
                        className="w-full h-full object-contain"
                        loading='lazy'
                    />
                    <h1 className='font-bold text-primary text-xl tracking-widest font-montserrat mt-4'>
                        {
                            member?.name && member.name.split(" ").join(" ")
                        }
                    </h1>
                    <h2 className='font-semibold text-foreground/70 text-sm tracking-widest font-montserrat uppercase mb-5'>
                        {
                            (member?.designation || member?.role) && (
                                (member.designation || member.role)
                                    .trim()
                                    .split(" ")
                                    .map((word, index, arr) =>
                                        index === arr.length - 1
                                            ? word.toUpperCase()
                                            : `${word.toUpperCase()}.`
                                    )
                                    .join(" ")
                            )
                        }
                    </h2>
                </div>
                <div className='order-2 md:order-1'>
                    {/* <p className='text-muted-foreground text-xl uppercase whitespace-pre-wrap'>{member?.description}</p> */}
                    <div className='text-muted-foreground text-lg space-y-4'>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkBreaks]}
                            components={{
                                p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                                em: ({ node, ...props }) => <em className="italic text-foreground" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 mb-4" {...props} />,
                                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                blockquote: ({ node, ...props }) => (
                                    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80 bg-secondary/30 p-4 rounded-r-lg" {...props} />
                                ),
                            }}
                        >
                            {member?.description}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDeatils;