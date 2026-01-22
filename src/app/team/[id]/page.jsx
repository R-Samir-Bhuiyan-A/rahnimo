"use client";

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import useAxios from '../../../hooks/useAxios';
import Image from 'next/image';
import Skeleton from '../../../components/ui/Skeleton';
import ErrorState from '../../../components/ui/ErrorState';

const TeamDeatils = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()

    const { data: member = {}, isLoading, isError, refetch } = useQuery({
        queryKey: ["team", id],
        queryFn: async () => {
            const res = await axiosInstance.get(`/admin/team/${id}`)
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
                    <h1 className='font-bold text-xl tracking-widest font-montserrat '>
                        {
                            member?.designation && (
                                member.designation
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


                    </h1>
                    <h1 className='font-bold text-primary text-xl tracking-widest font-montserrat mb-5'>
                        {
                            member?.name && member.name.split(" ").join(" ")
                        }

                    </h1>
                </div>
                <div className='order-2 md:order-1'>
                    <p className='text-muted-foreground text-xl uppercase'>{member?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamDeatils;