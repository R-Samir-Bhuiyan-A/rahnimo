


"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../components/ui/Skeleton";
import Link from "next/link";
import useAxios from "../../hooks/useAxios";
import ErrorState from "../../components/ui/ErrorState";
import { FadeInStagger, FadeInItem } from "../../components/animations/FadeInStagger";

// const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: (i) => ({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             duration: 0.7,
//             delay: i * 0.12,
//             ease: "easeOut",
//         },
//     }),
// };

const WorkClient = () => {
    const axiosInstance = useAxios()
    const { data: projects = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosInstance.get('/admin/projects');
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <Skeleton className="w-full h-60 rounded-md" />
                            <Skeleton className="w-1/4 h-4" />
                            <Skeleton className="w-3/4 h-6" />
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    if (isError) return <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20"><ErrorState onRetry={() => refetch()} message="Failed to load projects." /></section>;

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
            {/* GRID */}
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((item, i) => (
                    <FadeInItem key={i}>
                        <Link href={`/work/${item._id}`}>
                            <div className="border-b-2 border-border pb-2 group">
                                <div className="overflow-hidden rounded-md mb-2">
                                    <Image
                                        src={item.image}
                                        alt={item.projectTitle}
                                        width={200}
                                        height={200}
                                        loading="lazy"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                                        {item.category}
                                    </span>

                                    <h3 className="text-lg font-bold text-foreground">
                                        {item.projectTitle}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </section>
    );

};

export default WorkClient;
