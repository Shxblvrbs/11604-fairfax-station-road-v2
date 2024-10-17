"use client";

import clsx from "clsx";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function AnimatedContent({slice}: {slice:Content.HeroSlice}) {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion()
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        if (prefersReducedMotion) {
            gsap.set(".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow", { opacity:1 },);
            return;
        }

        const tl = gsap.timeline({default:{ease:"power2.inOut"}})

        tl.fromTo(".hero__heading", { scale:0.5 }, { scale:1, opacity:1, });
        tl.fromTo(".hero__body", { y:20 }, { y:0, opacity:1, duration:1.2 }, "-=0.35");
        tl.fromTo(".hero__button", { scale:1.5 }, { scale:1, opacity:1, duration:1.08 }, "-=1");
        tl.fromTo(".hero__image", { y:100 }, { y:0, opacity:1, duration:1.2 }, "+=0.1");
        tl.fromTo(".hero__glow", { scale:0.5 }, { scale:1, opacity:1, duration:1.4 }, "-=1");

    }, {scope:container})

  return (
    <div className="relative" ref={container}>

      {isFilled.richText(slice.primary.heading) && (
        <h1 className="hero__heading text-balance text-center text-5xl font-medium md:text-7xl opacity-0">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}

      {isFilled.richText(slice.primary.body) && (
        <div className="hero__body mx-auto mt-3 max-w-md text-xl text-balance text-slate-300 opacity-0">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}

      {isFilled.link(slice.primary.button_link) && (
        <PrismicNextLink 
        className= "hero__button text-lg mt-6 focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/50 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2 opacity-0"
        field={slice.primary.button_link}
        >
          {slice.primary.button_label}
        </PrismicNextLink>
        )}

      {isFilled.image(slice.primary.image) && (
        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/50 blur-2xl filter opacity-0" />
          <PrismicNextImage className="rounded-lg" field={slice.primary.image} />
        </div>
      )}
    </div>
  );
}
