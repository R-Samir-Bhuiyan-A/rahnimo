"use client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "next/navigation";
import Skeleton from "../../../components/ui/Skeleton";
import ErrorState from "../../../components/ui/ErrorState";
import { FaStar } from "react-icons/fa";
import { Reveal } from "../../../components/animations/Reveal";

const ProjectDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();

  const { data: projectDetails = {}, isLoading, isError, refetch } = useQuery({
    queryKey: ["projectDetails", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/admin/projects/${id}`);
      return res.data;
    },
  });

  const project = projectDetails.project;

  if (isError) return <section className="px-6 py-14 max-w-7xl mx-auto"><ErrorState onRetry={() => refetch()} message="Failed to load project details." /></section>;

  if (isLoading) {
    return (
      <section className="px-6 py-14 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* IMAGE */}
          <Skeleton className="w-full h-[500px] rounded-2xl" />

          {/* CONTENT */}
          <div className="space-y-6">
            <Skeleton className="w-32 h-8 rounded-full" />
            <Skeleton className="w-3/4 h-12" />
            <div className="space-y-3">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-2/3 h-4" />
            </div>
            <div className="space-y-2 pt-4">
              <Skeleton className="w-1/2 h-6" />
              <Skeleton className="w-1/2 h-6" />
              <Skeleton className="w-1/2 h-6" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-14 max-w-7xl mx-auto " itemScope itemType="https://schema.org/CreativeWork">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* IMAGE */}
        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={project?.image || "/placeholder.png"}
              width={520}
              height={520}
              alt={project?.projectTitle || "Project Image"}
              loading="eager"
              fetchPriority="high"
              className="rounded-xl object-contain w-full h-full"
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="space-y-4">

          <Reveal delay={0.1}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold" itemProp="genre">
              {project?.category}
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-extrabold" itemProp="name">
              {project?.projectTitle}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed">
              {project?.shortDescription}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div>
              <p><strong>Location:</strong> {project?.location}</p>
              {/*  <p><strong>Status:</strong> {project?.status}</p>
                <p><strong>Design Style:</strong> {project?.designStyle}</p>
        
                <p>
                    <strong>Completion Time:</strong>{" "}
                    {project?.completionTime || "Ongoing"}
                </p> */}

              <p>
                <strong>Completion Time:</strong>{" "}
                {project?.completionTime || "Ongoing"}
              </p>

              <p><strong>Client Review:</strong> {project?.clientReview}</p>
            </div>
          </Reveal>

          {/* ⭐ STAR RATING */}
          <Reveal delay={0.5}>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Client Rating:</span>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    className={
                      i < project?.clientRating
                        ? "text-yellow-400"
                        : "text-muted"
                    }
                  />
                ))}
              </div>

              <span className="text-sm text-muted-foreground">
                ({project?.clientRating || 0}/5)
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
        {
          project?.galleryImages && project?.galleryImages.map((img, idx) => (
            <Reveal key={`${project._id}-${idx}`} delay={idx * 0.1}>
              <Image
                src={img}
                width={200}
                height={200}
                alt="gallery image"
                loading={idx < 2 ? "eager" : "lazy"} // Load first 2 gallery images eagerly
                fetchPriority={idx < 2 ? "high" : "auto"} // Prioritize first 2 gallery images
                className="w-full h-full object-contain"
              />
            </Reveal>
          ))
        }
      </div>
    </section>
  );
};

export default ProjectDetails;
