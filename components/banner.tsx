"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/homepage/Carousel/Drivers License.jpg",
    title: "Skill Assessment",
  },
  {
    src: "/images/homepage/Carousel/Pick - Laptop.jpg",
    title: "Quiz Excellence",
  },
  {
    src: "/images/homepage/3.png",
    title: "Learning Journey",
  },
  {
    src: "/images/homepage/Carousel/Skill Library.jpg",
    title: "Hiring Simplified",
  },
];

export default function Banner() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full aspect-[1898/820] min-h-[430px] max-h-[820px]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 1}
              className="object-cover"
            />

            <div
              className={`absolute  top-[10%] max-w-xl ${slide.title === "Hiring Simplified" ? "left-[35%]" : "left-[5%]"}`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={previous}
          aria-label="Previous banner"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
        >
          <ChevronLeft className="w-6 h-6 text-[#00418d]" />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next banner"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
        >
          <ChevronRight className="w-6 h-6 text-[#00418d]" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActive(index)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-9 bg-[#f73c5c]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
