"use client"
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import Skeleton from '../../components/ui/Skeleton';
import Image from 'next/image';
import Link from 'next/link';

const TeamClient = () => {
    const axiosInstance = useAxios()
    const { data: teams = [], isLoading, isError } = useQuery({
        queryKey: ["teams"],
        queryFn: async () => {
            const res = await axiosInstance.get('/admin/team')
            return Array.isArray(res.data) ? res.data : []
        },
    })

    if (isLoading) {
        return (
            <div className='mt-10 px-5 md:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 lg:gap-8'>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className='flex flex-col gap-2 md:gap-3'>
                        <Skeleton className="w-full h-64 md:h-80 rounded-xl" />
                        <Skeleton className="w-1/2 h-6" />
                        <Skeleton className="w-1/3 h-6" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='mt-10 px-5 md:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 lg:gap-8'>
            {
                teams.length === 0 && !isLoading && (
                    <p className="text-center text-gray-500">No team members found</p>
                )
            }
            {
                Array.isArray(teams) && teams?.map(team => (
                    <div
                        key={team._id}
                        className='flex flex-col gap-2 md:gap-3'
                    >
                        <Link href={`/team/${team._id}`}>
                            <div className="relative w-full h-full group overflow-hidden rounded-xl">
                                <Image
                                    src={team?.image}
                                    width={200}
                                    height={200}
                                    alt="image"
                                    className="w-full h-full object-cover"
                                />

                                {/* Blue hover overlay */}
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </Link>
                        <h1 className='font-bold text-xl tracking-widest font-montserrat text-foreground'>
                            {
                                team?.designation
                                    .trim()
                                    .split(" ")
                                    .map((word, index, arr) =>
                                        index === arr.length - 1
                                            ? word.toUpperCase()
                                            : `${word.toUpperCase()}.`
                                    )
                                    .join(" ")
                            }

                        </h1>
                        <h1 className='font-bold text-primary text-xl tracking-widest font-montserrat '>
                            {
                                team?.name
                                    .split(" ")
                                    .join(" ")

                            }
                        </h1>
                    </div>
                ))
            }
        </div>
    );
};

export default TeamClient;