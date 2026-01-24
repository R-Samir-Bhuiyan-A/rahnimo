"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/ui/Spinner";
import ErrorState from "../components/ui/ErrorState";
import Link from "next/link";
import { FadeInStagger, FadeInItem } from "../components/animations/FadeInStagger";

const Projects = () => {
  const axiosInstance = useAxios();
  const [selectedCategory, setSelectedCategory] = useState("All");


  const { data: projects = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosInstance.get('/admin/projects');
      return res.data;
    },
  });

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  if (isLoading) return <Spinner />;
  if (isError) return <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20"><ErrorState onRetry={() => refetch()} message="Failed to load projects." /></section>;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${selectedCategory === cat
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 space-y-5">
        {filteredProjects.map((item, index) => (
          <FadeInItem key={item._id}>
            <Link href={`/work/${item._id}`}>
              <div className="border-b-2 border-border pb-2 group">
                <div className="overflow-hidden rounded-md mb-2">
                  <Image
                    src={item.image}
                    alt={item.projectTitle}
                    width={200}
                    height={200}
                    loading={index < 3 ? "eager" : "lazy"} // Load first 3 images eagerly
                    fetchPriority={index < 3 ? "high" : "auto"} // Prioritize first 3 images
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

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">No projects found in this category.</p>
      )}

    </section>
  );
};

export default Projects;