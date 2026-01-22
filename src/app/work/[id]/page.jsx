"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "next/navigation";
import Spinner from "../../../components/ui/Spinner";
import { FaStar } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();

  const { data: projectDetails = {}, isLoading } = useQuery({
    queryKey: ["projectDetails", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/admin/projects/${id}`);
      return res.data;
    },
  });

  const project = projectDetails.project;

  if (isLoading) return <Spinner />;

  return (
    <section className="px-6 py-14 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <div className="bg-secondary/50 rounded-2xl shadow-lg p-6 flex justify-center items-center">
          <Image
            src={project?.image || "/placeholder.png"}
            width={520}
            height={520}
            alt={project?.projectTitle || "Project Image"}
            loading="eager"
            className="rounded-xl object-contain w-full h-full"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-4">

          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
            {project?.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            {project?.projectTitle}
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            {project?.shortDescription}
          </p>

          <p><strong>Location:</strong> {project?.location}</p>
          <p><strong>Status:</strong> {project?.status}</p>
          <p><strong>Design Style:</strong> {project?.designStyle}</p>

          <p>
            <strong>Completion Time:</strong>{" "}
            {project?.completionTime || "Ongoing"}
          </p>

          <p><strong>Client Review:</strong> {project?.clientReview}</p>

          {/* ⭐ STAR RATING */}
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
        </div>
      </div>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
        {
          project?.galleryImages && project?.galleryImages.map((img, index) => (
            <Image
              key={`${project._id}-${index}`}
              src={img}
              width={200}
              height={200}
              alt="gallery image"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          ))
        }
      </div>
    </section>
  );
};

export default ProjectDetails;
