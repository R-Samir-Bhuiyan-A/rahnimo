"use client";

import Image from "next/image";
import React, { useState } from "react"; // useState যোগ করা হয়েছে
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/ui/Spinner";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((item, index) => (
          <Link href={`/work/${item._id}`} key={item._id}>
            <motion.article
              data-aos="flip-left"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.projectTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"} // Load first 3 images eagerly
                  fetchPriority={index < 3 ? "high" : "auto"} // Prioritize first 3 images
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <span className="text-xs uppercase tracking-widest text-fuchsia-600 font-semibold">
                  {item.category}
                </span>

                <div className="text-lg font-bold leading-snug line-clamp-2">
                  {item.projectTitle}
                </div>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.location || "Premium Interior & Architecture Project"}
                </p>
              </div>
            </motion.article>
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