"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/ui/Spinner";
import Link from "next/link";

const Projects = () => {
  const axiosInstance = useAxios();
  const [selectedCategory, setSelectedCategory] = useState("All");


  const { data: projects = [], isLoading, isError } = useQuery({
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
  if (isError) return <p className="text-center text-red-500">Failed to load projects.</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${selectedCategory === cat
              ? "bg-fuchsia-600 text-white border-fuchsia-600"
              : "bg-white text-gray-700 border-gray-200 hover:border-fuchsia-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 space-y-5">
        {filteredProjects.map((item) => (
          <Link href={`/work/${item._id}`} key={item._id}>
            <div className="border-b-2 pb-2">
              <Image
                src={item.image}
                alt={item.projectTitle}
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full object-contain"
              />
              <div>
                <span className="text-xs uppercase tracking-widest text-fuchsia-600 font-semibold">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold ">
                  {item.projectTitle}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No projects found in this category.</p>
      )}

    </section>
  );
};

export default Projects;