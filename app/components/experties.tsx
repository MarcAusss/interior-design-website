"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type AccordionItemProps = {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  title: string;
  description: string;
  solutions: string[];
  image: string;
};

function AccordionItem({
  index,
  activeIndex,
  setActiveIndex,
  title,
  description,
  solutions,
  image,
}: AccordionItemProps) {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      layout
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70 }}
      className="py-10 border-b border-gray-200"
    >
      {/* HEADER */}
      <div
        onClick={() => setActiveIndex(isOpen ? -1 : index)}
        className="flex justify-between items-start cursor-pointer"
      >
        <h1 className="text-4xl md:text-6xl w-72 md:w-auto leading-tight">
          {title}
        </h1>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-3xl font-light"
        >
          +
        </motion.div>
      </div>

      {/* CONTENT */}
      <motion.div
        layout
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          marginTop: isOpen ? 40 : 0,
        }}
        transition={{
          height: { duration: 0.4 },
          marginTop: { duration: 0.4 },
        }}
        className="overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-56">
          {/* IMAGE */}
          <div className="w-full md:w-96 h-60 relative">
            <Image
              src={image}
              fill
              alt=""
              className="object-cover"
            />
          </div>

          {/* TEXT SIDE */}
          <div className="w-full md:w-120 pb-10">
            <div className="mb-10">
              <div className="border-b w-full border-gray-200 py-2">
                <h1 className="font-semibold">What we do</h1>
              </div>
              <p className="py-2">{description}</p>
            </div>

            <div className="mb-10">
              <div className="border-b w-full border-gray-200 py-2">
                <h1 className="font-semibold">Solutions</h1>
              </div>
              <ul className="gap-2 py-2 flex flex-col">
                {solutions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <Link
              className="bg-black px-7 py-3 rounded-full text-white"
              href=""
            >
              View all Works
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExpertiesPage() {
  const [activeIndex, setActiveIndex] = useState(0); // default open first

  return (
    <div className="mb-10 px-6 md:px-0">
      {/* TITLE */}
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70 }}
        className="flex my-20 flex-col md:flex-row md:items-end md:gap-5"
      >
        <h1 className="text-4xl md:text-7xl">Our Expertise</h1>
        <p>[03]</p>
      </motion.div>

      {/* ACCORDIONS */}

      <AccordionItem
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        title="Architectural Design"
        image="/images/project1-main.jpg"
        description="From conceptual development to construction documentation, we craft spaces that respond to context, function, and timeless beauty."
        solutions={[
          "Concept Development",
          "Schematic and spatial planning",
          "Regulatory and permit coordination",
          "3D visualization",
          "Construction drawing & specifications",
        ]}
      />

      <AccordionItem
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        title="Interior Design"
        image="/images/project2-main.jpg"
        description="We design interior environments that balance elegance, comfort, and usability — tailored to your lifestyle or brand."
        solutions={[
          "Space planning",
          "Material and finishes selection",
          "Furniture & lighting design",
          "Custom detailing",
          "Styling & staging",
        ]}
      />

      <AccordionItem
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        title="Renovation & Restoration"
        image="/images/project3-main.jpg"
        description="We transform and preserve spaces with thoughtful upgrades while respecting architectural heritage and structural integrity."
        solutions={[
          "Structural upgrades",
          "Facade restoration",
          "Interior modernization",
          "Material replacement",
          "Historical detailing preservation",
        ]}
      />
    </div>
  );
}
