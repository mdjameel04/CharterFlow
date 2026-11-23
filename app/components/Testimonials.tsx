"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Optional photo, e.g. "/avatars/mike.jpg". Falls back to initials. */
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "CharterFlow increased our bookings by 42% in just 2 months. It's simple, fast, and saves us hours every week.",
    name: "Captain Mike R.",
    company: "Coastal Charter Co.",
    avatar: "/img2.jpg",
  },
  {
    quote: "The booking system is super simple, and our guests love it.",
    name: "Sarah N.",
    company: "Reel Time Charters",
    avatar: "/img3.png",
  },
  {
    quote: "It keeps my boats, crew, and bookings organized in one place.",
    name: "Jake M.",
    company: "Gulf Coast Charters",
    avatar: "/img1.png",
  },
];

function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = name
    .replace("Captain ", "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#12a094] to-[#0b6b63] text-sm font-bold text-white ring-2 ring-white shadow-md">
      {initials}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="absolute inset-0 size-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="customers" className="bg-[#f5f9fb] px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[250px_1fr] lg:gap-8">
        {/* Heading + arrows */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
            Customer Stories
          </p>

          <h2 className="mt-2 text-[26px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338]">
            Trusted by Charter Operators Across the U.S.
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="grid size-8 place-items-center rounded-full border border-[#0b2338]/60 bg-white text-[#0b2338] transition hover:bg-[#e3f4f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b]"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="grid size-8 place-items-center rounded-full border border-[#0b2338]/60 bg-white text-[#0b2338] transition hover:bg-[#e3f4f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b]"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="min-w-[85%] snap-start sm:min-w-[60%] lg:min-w-0 lg:flex-1"
            >
              <figure className="flex h-full items-center gap-4 rounded-2xl border border-white bg-white/90 p-4 shadow-[0_15px_45px_rgba(11,35,56,0.07)] backdrop-blur-xl">
                <Avatar name={t.name} src={t.avatar} />

                <div className="min-w-0 flex-1">
                  <blockquote className="text-[12.5px] font-medium leading-snug text-[#0b2338]">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-2 flex items-end justify-between gap-2">
                    <div className="leading-tight">
                      <p className="text-[11px] font-bold text-[#0b2338]">{t.name}</p>
                      <p className="text-[10px] text-[#647887]">{t.company}</p>
                    </div>

                    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-[#26b36b] text-[#26b36b]"
                        />
                      ))}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}