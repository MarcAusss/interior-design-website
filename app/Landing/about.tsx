import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-10 md:py-20">

        
        
{/*------------------------- TITLE -------------------------*/}



        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10">
            <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-400">[01]</p>
        </div>




{/*------------------------- MAIN CONTENT -------------------------*/}



        <div className="flex flex-col md:flex-row justify-between gap-10">

            
            
{/*------------------------- LEFT IMAGE -------------------------*/}



            <div className="w-full md:w-1/4 h-60 md:h-60 relative md:mr-20">
            <Image src="/images/image-4.png" alt="About Left" fill className="object-cover rounded-lg" />
            </div>




{/*------------------------- TEXT CONTENT -------------------------*/}



            <div className="w-full md:w-full flex flex-col">
                <p className="mb-4 text-base md:text-lg leading-relaxed">
                    Founded with a vision to create spaces that tell stories, Logo <br />Studio brings together a multidisciplinary team of designers, <br />architects, and creatives. Each project is a journey of collaboration <br />— listening, researching, and imagining alongside our clients.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                    We design with intention. Whether it&apos;s a modern home, a heritage <br />restoration, or a commercial interior, every detail is considered, <br />every space is personal.
                </p>
                <div className="mt-6 md:mt-10">
                    <Link href="" className="bg-black rounded-full px-6 md:px-10 py-3 text-white inline-block">
                    Get to Know Us
                    </Link>
                </div>
            </div>




{/*------------------------- RIGHT IMAGE -------------------------*/}



            <div className="w-full md:w-205 h-60 md:h-114 relative">
                <Image src="/images/32ed3284d24ae75cc2f560c90d116628.jpg" alt="About Right" fill className="object-cover rounded-lg" />
            </div>
        </div>




{/*------------------------- STATS SECTION -------------------------*/}



        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-10 md:mt-20">
            <div className="border-l border-gray-200 px-4 py-4 md:px-5 md:py-6 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold flex items-start">
                    40<span className="text-xl md:text-2xl">+</span>
                </h1>
                <p className="text-sm md:text-base mt-1">Completed Projects</p>
            </div>

            <div className="border-l border-gray-200 px-4 py-4 md:px-5 md:py-6 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold">8</h1>
                <p className="text-sm md:text-base mt-1">Years of Experience</p>
            </div>

            <div className="border-l border-gray-200 px-4 py-4 md:px-5 md:py-6 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold flex items-start">
                20<span className="text-xl md:text-2xl">+</span>
                </h1>
                <p className="text-sm md:text-base mt-1">Media features & awards</p>
            </div>

            <div className="border-l border-gray-200 px-4 py-4 md:px-5 md:py-6 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold">17</h1>
                <p className="text-sm md:text-base mt-1">Professional architects & designers</p>
            </div>
        </div>
    </div>
  );
}