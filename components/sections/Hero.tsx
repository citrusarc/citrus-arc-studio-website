import Link from "next/link";
import Image from "next/image";
import { FireFlame } from "iconoir-react";

export default function HeroSection() {
  return (
    <section className="relative z-0 flex p-4 sm:p-8 -mt-30 sm:-mt-46 items-center justify-center">
      <div className="relative flex flex-col sm:flex-row p-4 sm:p-8 pt-24 gap-8 w-full min-h-[94dvh] items-center justify-between rounded-2xl overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(rgba(255,255,255,0.1)_1.4px,transparent_1.4px),linear-gradient(to_right,rgba(255,255,255,0.1)_1.4px,transparent_1.4px)] bg-[size:40px_40px]" />
        <div className="relative z-10 flex flex-col max-w-6xl gap-8">
          <h1 className="text-5xl sm:text-[120px] font-semibold text-white">
            WE DESIGN AND BUILD DIGITAL PRODUCTS THAT
            <span className="text-orange-600"> GROW BRANDS</span> <br />
          </h1>
          <p className="flex gap-2 items-center text-xl sm:text-2xl italic">
            <FireFlame className="w-10 sm:w-8 h-10 sm:h-8 text-cyan-600" />4
            years of design-driven development
          </p>
        </div>
        <div className="relative z-10 flex flex-col gap-4 w-full sm:w-auto max-w-xl">
          <div className="relative w-full sm:w-[560px] aspect-square rounded-2xl overflow-hidden">
            <Image fill src="/Images/dummy-image.jpg" alt="Overview Banner" />
            <Link href="/" className="absolute bottom-0 p-4 w-full">
              <button className="p-4 w-full rounded-full cursor-pointer text-white bg-orange-600 hover:bg-orange-800">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
