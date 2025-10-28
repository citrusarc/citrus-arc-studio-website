"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SendMailSolid, WhatsappSolid } from "iconoir-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex px-6 sm:px-12 py-8 sm:py-16 items-center justify-center">
      <div
        className={`flex p-4 w-full items-center justify-between rounded-full border transition-all duration-200 ${
          isScrolled
            ? "backdrop-blur-md text-white border-white/20 bg-white/20"
            : "text-orange-600 border-transparent bg-transparent"
        }`}
      >
        <Link href="/">LOGO</Link>
        <div className="flex">
          <a
            href="https://wassap.my/601159956435"
            className="group flex items-center gap-2 px-4 py-2 rounded-full hover:text-white hover:bg-orange-600 transition-all"
          >
            <WhatsappSolid className="w-6 h-6" />
            <span className="hidden group-hover:inline max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out">
              Whatsapp Us
            </span>
          </a>
          <a
            href="mailto:citrusarc.studio@gmail.com"
            className="group flex items-center gap-2 px-4 py-2 rounded-full hover:text-white hover:bg-orange-600 transition-all"
          >
            <SendMailSolid className="w-6 h-6" />
            <span className="hidden group-hover:inline max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out">
              Email Us
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
