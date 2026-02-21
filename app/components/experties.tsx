"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



export default function ExpertiesPage() {
    return (
        <div className="mb-10">
            <div className="flex my-20">
                <h1 className="text-7xl">Our Expertise</h1>
                <p className="">[03]</p>
            </div>
            <div className="pb-10 border-b border-gray-200">
                <div className="flex justify-between">
                    <h1 className="text-6xl">Architectural <br /> Design</h1>
                    <i className="fa-solid fa-cross"></i>
                </div>
                <div className="flex gap-56 mt-10">
                    <div className="w-96 h-60 relative">
                        <Image src="/images/" fill alt="" className="object-cover"/>
                    </div>
                    <div className="w-120">
                        <div className="w-full">
                            <div className="mb-10">
                                <div className="border-b w-full border-gray-200 py-2">
                                    <h1 className="font-semibold">What we do</h1>
                                </div>
                                <p className="py-2">
                                    From conceptual development to construction documentation, we <br />
                                    craft spaces that respond to context, function, and timeless beauty.
                                </p>
                            </div>
                            <div className="mb-10">
                                <div className="border-b w-full border-gray-200 py-2">
                                    <h1 className="font-semibold">Solutions</h1>
                                </div>
                                <ul className="gap-2 py-2 flex flex-col circle-list">
                                    <li className="">Concept Development</li>
                                    <li className="">Schematic and spatial planning</li>
                                    <li className="">Regulatory and permit coordination</li>
                                    <li className="">3D visualization</li>
                                    <li className="">Construction drawing & specifications.</li>
                                </ul>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className=""
                            >
                                <Link
                                className="bg-black px-7 py-3 rounded-full text-white"
                                href=""
                                >
                                View all Works
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 border-b border-gray-200">
                <div className="flex justify-between">
                    <h1 className="text-6xl">Interior Design</h1>
                    <i className="fa-solid fa-cross"></i>
                </div>
            </div>

            <div className="py-10 border-b border-gray-200">
                <div className="flex justify-between">
                    <h1 className="text-6xl">Renovation <br /> & Restoration</h1>
                    <i className="fa-solid fa-cross"></i>
                </div>
            </div>

        </div>
    );
}