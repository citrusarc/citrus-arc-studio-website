export default function HeroSection() {
  return (
    <section className="relative z-0 flex p-4 -mt-30 items-center justify-center">
      <div className="relative flex flex-col sm:flex-row p-4 pt-24 gap-4 w-full h-screen items-center sm:items-start justify-between rounded-2xl overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(rgba(255,255,255,0.1)_1.4px,transparent_1.4px),linear-gradient(to_right,rgba(255,255,255,0.1)_1.4px,transparent_1.4px)] bg-[size:40px_40px]" />
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-[180px] font-bold text-orange-600">
            <span className="text-white">BUILD WHAT</span>
            <br />
            YOU IMAGINE
          </h1>
          <p className="sm:pl-4 text-2xl">Let it inspire.</p>
        </div>
        <p>Lorem ipsum here.</p>
      </div>
    </section>
  );
}
