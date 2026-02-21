import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


export default function ProjectsPage() {
    return (
        <div className="bg-[#262324] py-10 text-white">
            <div className="mx-auto max-w-354">
                <div className="flex my-10">
                    <h1 className="text-7xl">Selected Projects</h1>
                    <p className="">[2]</p>
                </div>
                <div className="flex justify-between items-end py-10 border-b border-gray-300">
                    <div className="">
                        <p className="text-6xl font-light">Serene Hillside</p>
                        <div className="flex gap-5 items-end">
                            <div className="h-16 w-30 relative">
                                <Image src="" alt="" fill/>
                            </div>
                            <p className="text-6xl font-light">Retreat</p>
                        </div>
                    </div>
                    <Link href="">
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} className="ml-5"/>
                    </Link>
                </div>
                <div className="flex justify-between items-end py-10 border-b opacity-25 border-gray-300">
                    <div className="">
                        <div className="flex gap-5 items-end">
                            <p className="text-6xl font-light">Luminere</p>
                            <div className="h-16 w-30 relative">
                                <Image src="" alt="" fill/>
                            </div>
                            <p className="text-6xl font-light">Studio</p>
                        </div>
                    </div>
                    <Link href="">
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} className="ml-5"/>
                    </Link>
                </div>
                <div className="flex justify-between items-end py-10 border-b opacity-25 border-gray-300">
                    <div className="">
                        <div className="flex gap-5 items-end">
                            <p className="text-6xl font-light">Terraform</p>
                            <div className="h-16 w-30 relative">
                                <Image src="" alt="" fill/>
                            </div>
                        </div>
                        <p className="text-6xl font-light">Courtyard House</p>
                    </div>
                    <Link href="">
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} className="ml-5"/>
                    </Link>
                </div>
                <div className="text-center mt-10">
                    <Link className="bg-white px-7 py-3 rounded-full text-black" href="">View all Works</Link>
                </div>
            </div>
        </div>
    );
}