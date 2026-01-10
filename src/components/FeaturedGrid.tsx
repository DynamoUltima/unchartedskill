"use client";

import Image from "next/image";

const CLASSES = [
    {
        id: 1,
        instructor: "Alex Chen",
        title: "Drone Racing & Aerial Photography",
        image: "/card-drone.png",
        tag: "NEW"
    },
    {
        id: 2,
        instructor: "Sarah Jenkins",
        title: "Urban Survival Skills",
        image: "/card-drone.png", // Reuse for now
        tag: "POPULAR"
    },
    {
        id: 3,
        instructor: "Gordon Ramsey (AI)",
        title: "Cyberpunk Cuisine",
        image: "/card-drone.png", // Reuse for now
        tag: "ORIGINAL"
    },
    {
        id: 4,
        instructor: "The Unknown",
        title: "Digital Anonymity",
        image: "/card-drone.png", // Reuse for now
        tag: ""
    }
];

export default function FeaturedGrid() {
    return (
        <section className="py-16 px-8 max-w-[1400px] mx-auto w-full">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-3xl font-bold text-white font-serif">Uncharted Originals</h2>
                <a href="#" className="text-[#b3b3b3] text-sm uppercase tracking-wider border-b border-transparent pb-[2px] hover:text-white hover:border-white transition-all duration-200">
                    View all
                </a>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {CLASSES.map((item) => (
                    <div key={item.id} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            {item.tag && (
                                <span className="absolute top-4 left-4 bg-white text-black py-1 px-2.5 text-[0.7rem] font-bold rounded-sm uppercase">
                                    {item.tag}
                                </span>
                            )}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                                <div className="text-sm text-[#b3b3b3] mb-2 uppercase tracking-wide">
                                    {item.instructor}
                                </div>
                                <h3 className="font-serif text-2xl leading-tight font-normal">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
