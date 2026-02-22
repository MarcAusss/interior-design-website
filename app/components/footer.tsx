import Link from "next/link";



export default function Footer() {
    return (
        <div className="bg-[#171717] text-white py-12">
            <div className="mx-auto max-w-354 flex justify-between">
                <div className="flex justify-between flex-col">
                    <Link href="/" className="text-2xl font-bold">
                        LOGO
                    </Link>
                    <p className="text-gray-400">© 2026 Logo Studio. All rights reserved.</p>
                </div>
                <div className="flex gap-16">
                    <div className="flex flex-col justify-between w-96">
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Contact</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400">Logo@gmail.com</p>
                                <p className="text-gray-400 mt-3">09323123212</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Address</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400">321 Tahao Street. Dasoi 901</p>
                                <p className="text-gray-400 mt-3">Legazpi City, 4511</p>
                                <p className="text-gray-400 mt-3">Philippines</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Working Hours</h1>
                            </div>
                            <div className="justify-end flex">
                                <p className="text-gray-400">Monday - Friday</p>
                                <p className="text-gray-400 ml-3">09:00 - 17:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-96">
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Contact</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400">Logo@gmail.com</p>
                                <p className="text-gray-400 mt-3">09323123212</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Navigations</h1>
                            </div>
                            <div className="text-right flex flex-col gap-2">
                                <Link href="" className="text-gray-400">Home</Link>
                                <Link href="" className="text-gray-400">Studio</Link>
                                <Link href="" className="text-gray-400">Works</Link>
                                <Link href="" className="text-gray-400">Services</Link>
                                <Link href="" className="text-gray-400">Experties</Link>
                                <Link href="" className="text-gray-400">Contact Us</Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="border-b py-4 border-gray-400">
                                <h1 className="">Follow Us</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400">Instagram</p>
                                <p className="text-gray-400 ml-3">Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}