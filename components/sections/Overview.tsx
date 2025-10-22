import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/Images/client-logo-1.png",
    alt: "Client Logo 1",
    href: "https://www.dercabinbistro.com/",
    fallback: "https://der-cabin-dining-app.vercel.app/",
  },
  {
    src: "/Images/client-logo-2.png",
    alt: "Client Logo 2",
    href: "https://www.nujumcafe.com/",
    fallback: "https://nujum-cafe-website.vercel.app/",
  },
  {
    src: "/Images/client-logo-3.png",
    alt: "Client Logo 3",
    href: "https://www.goldcoastmoribresort.com/",
    fallback:
      "https://goldcoastmorib-international-resort-booking-site-v2.vercel.app/",
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
      <div className="flex flex-col gap-4 sm:gap-8">
        <h2 className="text-6xl sm:text-[180px] font-bold">
          DRIVE <span className="text-cyan-600">REAL</span> RESULTS
        </h2>
        <div>
          <p>Our recent collaborations</p>
        </div>
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
              className="relative flex w-full h-32 sm:h-40 items-center justify-center rounded-xl bg-white/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={160}
                height={80}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-100"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
