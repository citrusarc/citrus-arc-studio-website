"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

const images = [
  {
    src: "/Images/client-logo-1.png",
    alt: "Client Logo 1",
    href: "https://www.dercabinbistro.com/",
    fallback: "https://der-cabin-dining-app.vercel.app/",
  },
  {
    src: "/Images/client-logo-2.png",
    alt: "Client Logo 21",
    href: "https://www.nujumcafe.com/",
    fallback: "https://nujum-cafe-website.vercel.app/",
  },
  {
    src: "/Images/client-logo-3.png",
    alt: "Client Logo 3",
    href: "https://www.goldcoastmoribresort.com/",
    fallback:
      "https://goldcoastmorib-international-resort-booking-site-v3.vercel.app/",
  },
  {
    src: "/Images/client-logo-4.png",
    alt: "Client Logo 4",
    href: "",
    fallback: "https://kawsa-clinic-ecommerce.vercel.app/",
  },
];

export default function OverviewSection() {
  return (
    <section className="flex flex-col gap-16 sm:gap-24 px-4 py-24 sm:py-64 items-center text-center text-white">
      <div className="flex flex-col gap-4 sm:gap-8 items-center">
        <h2 className="text-5xl sm:text-[180px] font-bold">
          MORE THAN <br />
          <CountUp
            from={0}
            to={10}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-orange-200"
          />
          <span> CLIENTS</span>
        </h2>
        <p>
          Built and designed over a dozen apps, tools, and digital products.
        </p>
        <p className="px-4 py-2 w-fit rounded-full text-orange-800 bg-orange-200/50">
          Some clients partner with us for a month, many stay for a year or
          more.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-6xl">
        {images.map((item, index) => {
          const href = item.href || item.fallback || "#";
          return (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full h-32 sm:h-40 items-center justify-center rounded-2xl sm:rounded-4xl backdrop-blur-md border border-white/30 bg-white/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={160}
                height={80}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-100"
              />
            </Link>
          );
        })}
      </div>
      <p>and many more...</p>
    </section>
  );
}
