"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({
  title = "Vision — Precision",
  subtitle,
}: HeaderProps) {
  return (
    <>
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "45vh" }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[100px]"
          >
            {title}
          </motion.h1>
        </div>
      </motion.div>

      {subtitle && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="my-5">{subtitle}</p>
        </motion.div>
      )}
    </>
  );
}
