"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface Slide {
  id: number;
  name: string;
  subdivision: string;
  street: string;
  location: string;
  year: string;
  cover: string;
  images: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    name: "Casa Verde",
    subdivision: "Jamaica Subdivision",
    street: "3291 Tahao Road",
    location: "Tabaco City, Philippines",
    year: "2026",
    cover: "/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg",
    images: [
      "/images/house1.jpg",
      "/images/house2.jpg",
      "/images/house3.jpg",
      "/images/house4.jpg",
    ],
  },
  {
    id: 2,
    name: "Villa Aurea",
    subdivision: "Golden Heights",
    street: "14 Palm Street",
    location: "Legazpi City, Philippines",
    year: "2025",
    cover: "/images/Exterior-Cam02-R1-1-0-0-1-scaled.jpg",
    images: [
      "/images/house2.jpg",
      "/images/house3.jpg",
      "/images/house4.jpg",
      "/images/house1.jpg",
    ],
  },
];

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const slide = slides[current];

  /* LOCK SCROLL */
  useEffect(() => {
    if (!isLoaded) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  /* LOADING */
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 20;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 400);
      }
      setProgress(value);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  /* MAGNET */
  const magnetRef = useRef<HTMLDivElement>(null);
  const [magnetStyle, setMagnetStyle] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = magnetRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 50) {
      setMagnetStyle({
        x: distanceX * 0.3,
        y: distanceY * 0.3,
        scale: 1.05,
      });
    } else {
      setMagnetStyle({ x: 0, y: 0, scale: 1 });
    }
  };

  const handleMouseLeave = () => {
    setMagnetStyle({ x: 0, y: 0, scale: 1 });
  };

  /* LOADING SCREEN */
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#FFFAF0] flex flex-col items-center justify-center z-50">
        <h1 className="text-4xl md:text-[100px] mb-10">
          Vision — Precision
        </h1>
        <div className="w-72 md:w-200 h-1 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:block">

        {/* HEADER */}
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: "45vh" }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-[100px]">Vision — Precision</h1>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="my-5">
            Forma Studio blends architectural discipline with refined interiors to <br />
            create spaces that timeless, functional, and uniquely yours.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="h-[80vh] w-full relative flex items-center justify-center bg-black overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image src={slide.cover} fill alt="" className="object-cover" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-0 flex w-full justify-between p-10 text-white z-10">
            <div>
              <h1>{slide.subdivision}</h1>
              <div className="mt-4">
                <h1>{slide.street}</h1>
                <h1>{slide.location}</h1>
              </div>
            </div>
            <h1>{slide.year}.</h1>
          </div>

          <motion.div
            ref={magnetRef}
            animate={magnetStyle}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpenModal(true)}
            className="z-10 flex flex-col items-center text-white cursor-pointer"
          >
            <h1>View Project</h1>
            <h1 className="mb-3 text-3xl leading-none">|</h1>
            <div className="w-12 h-12 border rounded-full text-2xl flex items-center justify-center hover:bg-white hover:text-black transition">
              +
            </div>
          </motion.div>

          <div className="flex w-full justify-center items-center gap-10 absolute bottom-6">
            <button onClick={prevSlide} className="text-white text-2xl">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="flex gap-3">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="text-white text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>


      {/* ================= MOBILE VIEW (NEW DIV) ================= */}
      <div className="block md:hidden px-6 py-10 space-y-6">

        <h1 className="text-4xl font-semibold text-center">
          Vision — Precision
        </h1>

        <p className="text-center text-sm">
          Forma Studio blends architectural discipline with refined interiors to
          create timeless and functional spaces.
        </p>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image src={slide.cover} fill alt="" className="object-cover" />
        </div>

        <div className="text-sm space-y-1">
          <p className="font-semibold">{slide.subdivision}</p>
          <p>{slide.street}</p>
          <p>{slide.location}</p>
          <p>{slide.year}</p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          View Project
        </button>

        <div className="flex justify-between pt-4">
          <button onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>


      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white w-full max-w-5xl rounded-2xl p-6 md:p-8 relative"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-xl"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <h1 className="text-2xl md:text-3xl mb-6">{slide.name}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-100">
                {slide.images.map((img, i) => (
                  <div key={i} className="relative h-60 md:h-auto">
                    <Image
                      src={img}
                      fill
                      alt=""
                      className="object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}