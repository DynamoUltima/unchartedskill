"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center pl-0 md:pl-[5vw] overflow-hidden justify-center md:justify-start text-center md:text-left pb-16 md:pb-0 items-end md:items-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/hero-bg.png"
          alt="Artisan potter"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-black/70 to-black/20 md:bg-gradient-to-r md:from-black/90 md:to-transparent"></div>
        <div className="absolute inherit w-full h-full bg-gradient-to-t from-black via-black/60 to-transparent md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-[600px] animate-[fadeIn_1s_ease-out]">
        <div className="uppercase tracking-[2px] text-xs mb-4 text-[#b3b3b3] border-b-[3px] md:border-b-0 md:border-l-[3px] border-accent pb-2 md:pb-0 md:pl-4 inline-block md:block">
          Now Streaming
        </div>
        <h1 className="text-4xl md:text-6xl leading-[1.1] mb-6 drop-shadow-md font-serif font-bold">
          Learn from the best.<br />
          Become your best.
        </h1>
        <p className="text-xl mb-8 text-[#ddd]">
          Unlimited access to thousands of bite-sized lessons.
        </p>
        <button className="bg-accent text-white py-4 px-10 text-lg font-semibold rounded hover:scale-105 hover:bg-[#f00] transition-all duration-200">
          Get UnchartedSkill
        </button>
        <div className="mt-4 text-sm text-[#b3b3b3]">
          Start for $10/month (billed annually)
        </div>
      </div>
    </section>
  );
}
