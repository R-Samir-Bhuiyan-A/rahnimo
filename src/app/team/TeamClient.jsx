"use client"
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import Skeleton from '../../components/ui/Skeleton';
import ErrorState from '../../components/ui/ErrorState';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInStagger, FadeInItem } from '../../components/animations/FadeInStagger';

const TeamClient = () => {
    const axiosInstance = useAxios()
    const { data: teams = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["teams"],
        queryFn: async () => {
            const res = await axiosInstance.get('/admin/team')
            return Array.isArray(res.data) ? res.data : []
        },
    })

    if (isError) return <div className='mt-10 px-5 md:px-20 py-14'><ErrorState onRetry={() => refetch()} message="Failed to load team members." /></div>

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
        <section className="relative min-h-screen">
            {/* Background Video */}
            <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]"
                    style={{ filter: "grayscale(20%)" }} // Optional aesthetic touch
                >
                    <source src="/team.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/70" />
            </div>

            <FadeInStagger className='mt-10 px-5 md:px-20 py-14 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 lg:gap-8'>
                {
                    teams.length === 0 && !isLoading && (
                        <p className="text-center text-gray-500 col-span-full">No team members found</p>
                    )
                }
                {
                    Array.isArray(teams) && teams?.map(team => (
                        <FadeInItem
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
                            <h1 className='font-bold text-primary text-xl tracking-widest font-montserrat mt-4'>
                                {
                                    team?.name && (
                                        team.name
                                            .split(" ")
                                            .join(" ")
                                    )
                                }
                            </h1>
                            <h2 className='font-semibold text-foreground/70 text-sm tracking-widest font-montserrat uppercase'>
                                {
                                    team?.designation && (
                                        team.designation
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
                        </FadeInItem>
                    ))
                }
            </FadeInStagger>
        </section>
    );
};

export default TeamClient;