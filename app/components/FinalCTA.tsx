import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#0b5560] via-[#094450] to-[#06222e]"
    >
      {/*
        Wide panoramic image (~8:1), anchored top-left so the tuna stays on the left.
        Mobile: full width at the top (text sits below it).
        Desktop (lg+): rendered at 125% width so the fish is bigger, and the extra
        right side is simply cropped by `overflow-hidden`.
        Set width/height to your real file size.
      */}
      <Image
        src="/cta-img.png"
        alt=""
        width={1024}
        height={123}
        sizes="(min-width: 1024px) 125vw, 100vw"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-20 h-auto w-full max-w-none select-none [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] lg:w-[125%]"
      />

      {/* Soft overlay: clear on the fish (left), a bit darker behind text/buttons */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#06222e]/50 lg:bg-gradient-to-r lg:from-transparent lg:from-25% lg:via-[#06222e]/30 lg:to-[#06222e]/60"
        aria-hidden="true"
      />

      {/*
        Layout on lg+: [ fish area ] [ text (middle) ] [ buttons (right) ]
        `lg:pl-[34vw]` reserves the left ~third of the screen for the fish.
      */}
      <div className="flex flex-col items-start gap-10 px-5 pb-16 pt-[max(4rem,13vw)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-16 lg:pl-[34vw] lg:pr-10 xl:pr-16">
        {/* Copy (middle) */}
        <div className="max-w-2xl lg:flex-1">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 backdrop-blur-md">
            Your next chapter starts here
          </span>

          <h2
            id="final-cta-heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl 2xl:text-5xl"
          >
            Ready to Take Your
            <br />
            Charter Business{" "}
            <span className="font-serif font-medium italic text-teal-300">
              Further?
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
            Get started with CharterFlow and spend more time on the water.
            Manage bookings, connect with customers, and grow your business
            with confidence.
          </p>
        </div>

        {/* Buttons (right) */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:min-w-[210px] lg:flex-col">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#1fd18a] to-[#0fa56a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full border border-white/80">
              <Play className="h-2.5 w-2.5 fill-white text-white" aria-hidden="true" />
            </span>
            Book a Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}