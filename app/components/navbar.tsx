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
        { title: "Interior Design", href: "/services/web-development" },
        { title: "Architectural Design", href: "/services/ui-ux" },
        { title: "Renovation & Restoration", href: "/services/branding" },
        ],
    },
    {
        title: "Teams",
        href: "/Teams",
        sub: [
        { title: "Interior Designer", href: "/Teams/case-studies" },
        { title: "Architectural Designer", href: "/Teams/projects" },
        { title: "Renovation & Restoration Team", href: "/Teams/experiments" },
        ],
    },
    {
        title: "Experties",
        href: "/experties",
        sub: [
        { title: "Interior Design", href: "/experties/web-development" },
        { title: "Architectural Design", href: "/experties/ui-ux" },
        { title: "Renovation & Restoration", href: "/experties/branding" },
        ],
    },
    { title: "Contact Us", href: "/contact" },
];

export default function TopNav() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
        document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
        {/* TOP BAR */}
        <div
            className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 transition-colors duration-300 ${
            open ? "bg-[#171717]" : "bg-[#FFFAF0]"
            }`}
        >
            {/* Logo only when menu is closed */}
            <div className="flex-1">
            {!open && (
                <Link href="/" className="text-2xl font-bold text-black">
                LOGO
                </Link>
            )}
            </div>

            {/* HAMBURGER / X button (always in same position) */}
            <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative w-8 h-6 flex flex-col justify-between z-50"
            >
            <span
                className={`h-0.5 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2.5 bg-white" : "bg-black"
                }`}
            />
            <span
                className={`h-0.5 transition-all duration-300 ${
                open ? "opacity-0" : "bg-black"
                }`}
            />
            <span
                className={`h-0.5 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2.5 bg-white" : "bg-black"
                }`}
            />
            </button>
        </div>

        {/* OVERLAY MENU */}
        <AnimatePresence>
            {open && (
            <motion.nav
                initial={{ clipPath: "circle(0% at 100% 0%)" }}
                animate={{ clipPath: "circle(150% at 100% 0%)" }}
                exit={{ clipPath: "circle(0% at 100% 0%)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="fixed inset-0 bg-[#171717] text-white z-40 overflow-y-auto"
            >
                {/* MOBILE VIEW */}
                <div className="flex flex-col items-center md:hidden px-6 pt-20 space-y-8">
                {navItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-full">
                    <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-3xl font-bold text-center"
                    >
                        {item.title}
                    </Link>

                    {item.sub && (
                        <div className="flex flex-col items-center mt-2 space-y-2">
                        {item.sub.map((sub) => (
                            <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="text-xl text-gray-400 hover:text-white"
                            >
                            {sub.title}
                            </Link>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden md:flex h-full">
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
                    {activeIndex !== null && navItems[activeIndex]?.sub && (
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
                </div>
            </motion.nav>
            )}
        </AnimatePresence>
    </>
  );
}