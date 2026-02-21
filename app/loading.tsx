"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // Clean page title based on pathname
  const pageTitle = useMemo(() => {
    if (!pathname || pathname === "/") return "Home";

    switch (pathname) {
      case "/projects":
        return "Selected Projects";
      case "/expertise":
        return "Our Expertise";
      case "/contact":
        return "Contact Us";
      default:
        // Format fallback title like "About Us" from "/about-us"
        return pathname
          .replace("/", "")
          .replace("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  }, [pathname]);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 18;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(value);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#FFFAF0] flex flex-col items-center justify-center z-50"
    >
      {/* Dynamic Page Title */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[50px] md:text-[100px] mb-12"
      >
        {pageTitle}
      </motion.h1>

      {/* Progress Bar */}
      <div className="w-72 md:w-125 h-0.75 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Percentage */}
      <motion.p
        key={progress}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-sm tracking-widest"
      >
        {Math.floor(progress)}%
      </motion.p>
    </motion.div>
  );
}
