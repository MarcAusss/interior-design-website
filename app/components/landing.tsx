import Image from "next/image";
import Link from "next/link";



export default function LandingPage() {
    return (
        <div>
            {/*----------- Loading page & top header -----------*/}
            <div className="flex items-center justify-center">
                <div className="items-center h-[30vh] mt-30  mb-10 flex flex-col justify-between">
                    <h1 className="text-7xl">Vision — Precision</h1>
                    <div className="loading"></div>
                    <p className="text-center">
                        Forma Studio blends architectural discipline with refined interiors to <br/> 
                        create spaces that timeless, functional, and uniquely yours.
                    </p>
                </div>
            </div>

            
            {/*----------- Image carousel -----------*/}
            <div className="h-[70vh] w-full relative flex items-center justify-center bg-black">
                <Image src="/images/" fill alt="" className="object-cover"/>
                <div className="absolute top-0 flex w-full justify-between p-10">
                    <div className="text-white">
                        <div className="flex">
                            <i className="pin location icon"></i>
                            <h1>Jamaica Subdivision</h1>
                        </div>

                        <div className="mt-4">
                            <h1>3291 Tahao Road</h1>
                            <h1>Tabaco City, Philippines.</h1>
                        </div>
                    </div>
                    <h1 className="text-white">2026.</h1>
                    
                </div>
                <div className="flex flex-col items-center text-white">
                        <h1 className="">View Project</h1>
                        <h1 className=" mb-3 text-3xl leading-none">|</h1>
                    <Link href="" className="w-10 h-10 flex items-center justify-center border-white border text-white rounded-full text-6xl">·</Link>
                </div>
                <div className="absolute bottom-0 flex w-full justify-center">
                    {/* i want this to have the page indicator but only a solid white dot when the page is displayed and gray dot if the page is not displayed. and i want it to have arrows on both sides like left arrow on left and right arrow on the right. make at least 8 slides. */}
                </div>
            </div>
        </div>
    );
}