"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#171717] text-white py-12">
      {/* DESKTOP FOOTER */}
      <div className="hidden md:flex mx-auto max-w-354 justify-between">
        <div className="flex flex-col justify-between">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
          <p className="text-gray-400">© 2026 Logo Studio. All rights reserved.</p>
        </div>
        <div className="flex gap-16">
          {/* Left Columns */}
          <div className="flex flex-col justify-between w-96">
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Contact</h1>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Logo@gmail.com</p>
                <p className="text-gray-400 mt-3">09323123212</p>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Address</h1>
              </div>
              <div className="text-right">
                <p className="text-gray-400">321 Tahao Street. Dasoi 901</p>
                <p className="text-gray-400 mt-3">Legazpi City, 4511</p>
                <p className="text-gray-400 mt-3">Philippines</p>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Working Hours</h1>
              </div>
              <div className="justify-end flex">
                <p className="text-gray-400">Monday - Friday</p>
                <p className="text-gray-400 ml-3">09:00 - 17:00</p>
              </div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex flex-col gap-3 w-96">
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Contact</h1>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Logo@gmail.com</p>
                <p className="text-gray-400 mt-3">09323123212</p>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Navigations</h1>
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
            <div>
              <div className="border-b py-4 border-gray-400">
                <h1>Follow Us</h1>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Instagram</p>
                <p className="text-gray-400 ml-3">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER */}
      <div className="md:hidden px-6 flex flex-col gap-8">
        {/* Logo & Rights */}
        <div className="flex flex-col items-start gap-2">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
          <p className="text-gray-400 text-sm">© 2026 Logo Studio. All rights reserved.</p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {/* Contact */}
          <div>
            <h1 className="border-b border-gray-400 pb-2">Contact</h1>
            <p className="text-gray-400 mt-2">Logo@gmail.com</p>
            <p className="text-gray-400 mt-1">09323123212</p>
          </div>

          {/* Address */}
          <div>
            <h1 className="border-b border-gray-400 pb-2">Address</h1>
            <p className="text-gray-400 mt-2">321 Tahao Street. Dasoi 901</p>
            <p className="text-gray-400 mt-1">Legazpi City, 4511</p>
            <p className="text-gray-400 mt-1">Philippines</p>
          </div>

          {/* Working Hours */}
          <div>
            <h1 className="border-b border-gray-400 pb-2">Working Hours</h1>
            <p className="text-gray-400 mt-2">Monday - Friday</p>
            <p className="text-gray-400 mt-1">09:00 - 17:00</p>
          </div>

          {/* Navigations */}
          <div>
            <h1 className="border-b border-gray-400 pb-2">Navigations</h1>
            <div className="flex flex-col gap-1 mt-2">
              <Link href="" className="text-gray-400">Home</Link>
              <Link href="" className="text-gray-400">Studio</Link>
              <Link href="" className="text-gray-400">Works</Link>
              <Link href="" className="text-gray-400">Services</Link>
              <Link href="" className="text-gray-400">Experties</Link>
              <Link href="" className="text-gray-400">Contact Us</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h1 className="border-b border-gray-400 pb-2">Follow Us</h1>
            <div className="flex gap-4 mt-2 text-gray-400">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}