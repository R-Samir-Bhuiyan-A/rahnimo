"use client"
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import Skeleton from '../../components/ui/Skeleton';
import ErrorState from '../../components/ui/ErrorState';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInStagger, FadeInItem } from '../../components/animations/FadeInStagger';

const TeamCard = ({ team, index }) => {
    return (
        <FadeInItem className="break-inside-avoid mb-6">
            <div
                className="flex flex-col gap-3 group"
            >
                <Link href={`/team/${team._id}`}>
                    <div className="relative w-full rounded-2xl overflow-hidden bg-muted">
                        {/* Main Image */}
                        <Image
                            src={team?.image || '/placeholder.jpg'}
                            width={500}
                            height={600}
                            alt={team.name}
                            loading={index < 2 ? "eager" : "lazy"} // Load first 2 team images eagerly
                            fetchPriority={index < 2 ? "high" : "auto"} // Prioritize first 2 team images
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                </Link>

                <div className="space-y-1 px-1">
                    <div className='font-bold text-primary text-lg tracking-wider font-montserrat'>
                        {team?.name}
                    </div>
                    <div className='font-medium text-muted-foreground text-xs tracking-widest uppercase'>
                        {team?.designation}
                    </div>
                </div>
            </div>
        </FadeInItem>
    );
};

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
            <div className='mt-10 px-5 md:px-20 py-14 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className='break-inside-avoid flex flex-col gap-3'>
                        <Skeleton className={`w-full rounded-2xl ${i % 2 === 0 ? 'h-96' : 'h-64'}`} />
                        <Skeleton className="w-1/2 h-6" />
                        <Skeleton className="w-1/3 h-4" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <section className="relative min-h-screen" itemScope itemType="https://schema.org/Organization">
            {/* Background Video */}
            <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]"
                    style={{ filter: "grayscale(20%)" }}
                >
                    <source src="/team.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/70" />
            </div>

            {/* Masonry Layout */}
            <div className="mt-10 px-5 md:px-20 py-14">
                <h2 className="sr-only">Our Interior Design Team Members</h2>
                {teams.length === 0 && !isLoading ? (
                    <p className="text-center text-muted-foreground">No team members found</p>
                ) : (
                    <FadeInStagger className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {teams.map((team, index) => (
                            <TeamCard key={team._id} team={team} index={index} />
                        ))}
                    </FadeInStagger>
                )}
            </div>
        </section>
    );
};

export default TeamClient;