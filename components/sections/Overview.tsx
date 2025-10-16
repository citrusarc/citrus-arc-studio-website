import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="flex flex-col gap-16 sm:gap-24 px-4 py-24 sm:py-64 items-center text-center text-white">
      <div className="flex flex-col gap-4 sm:gap-8">
        <h2 className="text-6xl sm:text-[180px] font-bold">
          THIS WILL BE THE BIG TITLE
        </h2>
        <div>
          <p>This will be the small description.</p>
        </div>
      </div>
      <div className="relative w-full sm:w-4xl h-56 sm:h-96 rounded-full overflow-hidden">
        <Image fill src="/Images/dummy-image.jpg" alt="Overview Banner" />
      </div>
    </section>
  );
}
