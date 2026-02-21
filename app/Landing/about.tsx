import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
    return (
        <div>
            <div className="flex mb-10 mt-20">
                <h1 className="text-7xl">About Us</h1>
                <p className="">[01]</p>
            </div>
            <div className="flex justify-between">
                <div className="w-35 h-20 bg-red-200 relative">
                    <Image src="/images/" alt="" fill className="object-cover"/>
                </div>
                <div className="w-fit">
                    <p className="mb-4">
                        Founded with a vision to create spaces that tell stories, Forma <br />
                        Studio brings together a multidisciplinary team of designers, <br />
                        architets, and creatives. Each project is a journey of collaboration <br />
                        —listining, researching, and imagining alongisde our clients.
                    </p>
                    <p className="">
                        We design with intention. Whether it&apos;s a modern home, a heritage <br />
                        restoration, or a commercial interior, every detail is considered, <br />
                        every space is personal.
                    </p>
                    <div className="mt-10">
                        <Link href="" className="bg-black rounded-full px-10 py-3 text-white">Get to Know Us</Link>
                    </div>
                </div>
                <div className="w-125 h-150 relative">
                    <Image src="/images/" alt="" fill className="object-cover"/>
                </div>
            </div>
            <div className="flex justify-between mt-10">
                <div className="border-l border-gray-200 px-5 py-2">
                    <h1 className="text-5xl flex items-start">40<span className="text-xl">+</span></h1>
                    <p className="">Completed Projects.</p>
                </div>
                <div className="border-l border-gray-200 px-5 py-2">
                    <h1 className="text-5xl flex items-start">8</h1>
                    <p className="">Year of Experience.</p>
                </div>
                <div className="border-l border-gray-200 px-5 py-2">
                    <h1 className="text-5xl flex items-start">20<span className="text-xl">+</span></h1>
                    <p className="">Media features & awards.</p>
                </div>
                <div className="border-l border-gray-200 px-5 py-2">
                    <h1 className="text-5xl flex items-start">17</h1>
                    <p className="">Professional architecs & designers</p>
                </div>
            </div>
        </div>
    );
}