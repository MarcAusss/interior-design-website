"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProjectProps = {
  titleTop: string;
  titleBottom: string;
  images: string[];
};

function Project({ titleTop, titleBottom, images }: ProjectProps) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  });

  const layoutId = `project-image-${images[0]}`;

  return (
    <motion.div
        ref={ref}
        layout="position"
        initial={{ opacity: 0, y: 80 }}
        animate={{
            opacity: inView ? 1 : 0.25,
            y: inView ? 0 : 20,
        }}
        transition={{
            opacity: { duration: 0.4 },
            y: { type: "spring", stiffness: 80, damping: 18 },
        }}
        className="flex justify-between items-end py-10 border-b border-gray-300"
        >
        {/* LEFT SIDE */}
        <div className="w-full">
            {/* TITLE ROW */}
            <motion.div
            layout="position"
            className="flex gap-5 items-end"
            >
            {/* TEXT LEFT */}
            <motion.p
                layout="position"
                animate={{
                x: inView ? -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="text-4xl md:text-6xl font-light"
            >
                {titleTop}
            </motion.p>

            {/* IMAGE (moves smoothly) */}
            <motion.div
                layoutId={layoutId}
                layout="position"
                animate={{
                width: inView ? 288 : 120,
                height: inView ? 200 : 64,
                }}
                transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
                }}
                className="relative overflow-hidden"
            >
                <Image
                src={images[0]}
                alt=""
                fill
                className="object-cover"
                />
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.p
                layout="position"
                animate={{
                x: inView ? -20 : 0,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="text-4xl md:text-6xl font-light"
            >
                {titleBottom}
            </motion.p>
            </motion.div>

            {/* GALLERY */}
            <motion.div
            layout="position"
            animate={{
                opacity: inView ? 1 : 0,
                height: inView ? "auto" : 0,
            }}
            transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.4 },
            }}
            className="flex gap-6 mt-8 overflow-hidden"
            >
            {images.slice(1).map((img, index) => (
                <motion.div
                key={index}
                layout="position"
                className="w-72 h-50 relative"
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
                >
                <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                />
                </motion.div>
            ))}
            </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div layout="position">
            <Link href="" className="flex items-center">
            View Project
            <FontAwesomeIcon icon={faArrowRight} className="ml-5" />
            </Link>
        </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-[#262324] py-10 text-white">
      <div className="mx-auto max-w-354 px-6 md:px-0">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 80 }}
          className="flex my-10 flex-col md:flex-row md:items-end md:gap-5"
        >
          <h1 className="text-4xl md:text-7xl">
            Selected Projects
          </h1>
          <p>[02]</p>
        </motion.div>

        <Project
          titleTop="Serene Hillside"
          titleBottom="Retreat"
          images={[
            "/images/project1-main.jpg",
            "/images/project1-1.jpg",
            "/images/project1-2.jpg",
            "/images/project1-3.jpg",
          ]}
        />

        <Project
          titleTop="Luminere"
          titleBottom="Studio"
          images={[
            "/images/project2-main.jpg",
            "/images/project2-1.jpg",
            "/images/project2-2.jpg",
            "/images/project2-3.jpg",
          ]}
        />

        <Project
          titleTop="Terraform"
          titleBottom="Courtyard House"
          images={[
            "/images/project3-main.jpg",
            "/images/project3-1.jpg",
            "/images/project3-2.jpg",
            "/images/project3-3.jpg",
          ]}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            className="bg-white px-7 py-3 rounded-full text-black"
            href=""
          >
            View all Works
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
