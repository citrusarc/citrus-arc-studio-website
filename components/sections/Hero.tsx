import Link from "next/link";
import Image from "next/image";
import { FireFlame, EditPencil } from "iconoir-react";

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
          <div className="relative w-full sm:w-[560px] aspect-square rounded-2xl overflow-hidden bg-white/30">
            <Image fill src="/Images/hero-banner.png" alt="Overview Banner" />
            <Link href="/get-in-touch" className="absolute bottom-0 p-4 w-full">
              <button className="group flex p-2 w-full items-center justify-between rounded-full cursor-pointer border text-white hover:text-orange-600 border-transparent hover:border-orange-600 bg-orange-600 hover:bg-white">
                <span className="mx-auto up-down-on-hover font-semibold">
                  GET IN TOUCH
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full text-orange-600 group-hover:text-white bg-white group-hover:bg-orange-600">
                  <EditPencil className="w-6 h-6 right-left-on-hover" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
