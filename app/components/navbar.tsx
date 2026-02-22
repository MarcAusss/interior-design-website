"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  title: string;
  href: string;
  sub?: { title: string; href: string }[];
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Studio", href: "/studio" },
  {
    title: "Services",
    href: "/services",
    sub: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "UI/UX Design", href: "/services/ui-ux" },
      { title: "Brand Strategy", href: "/services/branding" },
    ],
  },
  {
    title: "Works",
    href: "/works",
    sub: [
      { title: "Case Studies", href: "/works/case-studies" },
      { title: "Client Projects", href: "/works/projects" },
      { title: "Experiments", href: "/works/experiments" },
    ],
  },
  {
    title: "Experties",
    href: "/experties",
    sub: [
      { title: "Frontend", href: "/experties/frontend" },
      { title: "Backend", href: "/experties/backend" },
      { title: "Fullstack", href: "/experties/fullstack" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ✅ Lock body scroll when nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50">
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative w-8 h-6 flex flex-col justify-between z-50"
        >
          <span
            className={`h-0.5 bg-black transition-all duration-300 ${
              open ? "rotate-45 translate-y-2.5 bg-white" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-black transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2.5 bg-white" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#171717] text-white z-40 flex"
          >
            {/* LEFT SIDE */}
            <div className="w-1/2 flex flex-col justify-center pl-20 space-y-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() =>
                    setActiveIndex(item.sub ? index : null)
                  }
                  className="relative group"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-16" />

                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-6xl pl-20 block"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px bg-white/40 my-20" />

            {/* RIGHT SIDE SUBNAV */}
            <div className="w-1/2 flex items-center pl-20">
              <AnimatePresence mode="wait">
                {activeIndex !== null &&
                  navItems[activeIndex]?.sub && (
                    <motion.div
                      key={navItems[activeIndex].title}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 text-2xl"
                    >
                      {navItems[activeIndex].sub!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="block hover:opacity-70"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}