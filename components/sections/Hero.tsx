import Link from "next/link";

import { schoolBell } from "@/config/font";

export default function HeroSection() {
  return (
    <section className="relative z-0 flex p-4 -mt-30 items-center justify-center">
      <div className="relative flex flex-col sm:flex-row p-4 pt-24 gap-4 w-full min-h-[96dvh] items-center justify-between rounded-2xl overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(rgba(255,255,255,0.1)_1.4px,transparent_1.4px),linear-gradient(to_right,rgba(255,255,255,0.1)_1.4px,transparent_1.4px)] bg-[size:40px_40px]" />
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-[180px] font-bold text-orange-600">
            <span className="text-white">BUILD WHAT</span>
            <br />
            YOU DREAM <br />
            <span
              className={`${schoolBell.className} text-4xl sm:text-8xl text-white`}
            >
              COULD BE REAL
            </span>
          </h1>
          <p className="sm:pl-4 text-2xl italic">
            Let it inspire. Make it happen.
          </p>
        </div>
        <div className="relative z-10 w-full sm:w-auto">
          <Link href="/" className="w-full sm:w-fit">
            <button className="p-4 w-full sm:w-fit rounded-2xl cursor-pointer text-white bg-orange-600 hover:bg-orange-800">
              SEE THE WORK
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
