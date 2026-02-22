"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full md:mt-20">
        {/* VIDEO SECTION */}
        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
            {/* VIDEO */}
            <video
            src="/videos/LUXURY INTERIOR DESIGN_ for spending the best life.mp4" // <-- replace with your video path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-transparent"></div>

            {/* TEXT TOP */}
            <div className="absolute top-5 md:top-10 w-full px-4 md:px-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Shape Your Vision <br />
                    to Reality
                </h1>
            </div>

            {/* BOTTOM FLEX DIV */}
            <div className="absolute bottom-5 md:bottom-10 w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* LEFT TEXT */}
                <p className="text-white text-sm md:text-base max-w-md text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

            {/* RIGHT LINK */}
                <Link
                    href=""
                    className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                    Get in Touch
                </Link>
            </div>
        </div>
    </div>
  );
}