"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
import ScrollReveal from "../ui/ScrollReveal";
const timeline = [
  {
    year: "2005",
    title: "Born in a storm",
    description:
      "24 June 2005. A rainy, stormy Friday in Prayagraj. Some people arrive quietly. I arrived in a storm.",
  },
  {
    year: "2009",
    title: "The lonely ground",
    description:
      "A school ground full of children. And me — walking alone. Not sad. Just observing. Those years made me someone deeply comfortable in his own mind.",
  },
  {
    year: "2012",
    title: "The builder",
    description:
      "Every holiday I built cities out of wooden blocks. Created stories around them. Then destroyed everything and started again. Not frustration — curiosity.",
  },
  {
    year: "2016",
    title: "The spark",
    description:
      "Wanted to build an RC car. Couldn't afford it. Built a generator instead. Both failed. The project got stolen from the exhibition. But I won first prize in greeting card making — which I didn't even believe.",
  },
  {
    year: "2018",
    title: "The artist awakens",
    description:
      "Started drawing, singing, dancing, writing. Not because anyone asked. Because these things take me somewhere out of this world. That part of me never fully leaves.",
  },
  {
    year: "2020",
    title: "The Iron Man era",
    description:
      "Lockdown. Watched Iron Man. Something cracked open. First laptop. Taught myself HTML, CSS, Python. Built websites, a voice assistant, an Iron Man hand piece from syringes. Then a format and a corrupted HDD wiped everything. The learning stayed.",
  },
  {
    year: "2024",
    title: "A new beginning",
    description:
      "JEE 88.7 percentile. Not what I dreamed. But I walked into college already knowing 4 programming languages when others knew zero. The gap between dreams and discipline taught me my one real regret — and the beginning of fixing it.",
  },
  {
    year: "2025",
    title: "Building for real",
    description:
      "SIH. Hackathons. DSA every day. Innovate Bharat. Learning what it means to build under pressure, in teams, against deadlines. Still standing.",
  },
  {
    year: "2026",
    title: "This moment",
    description:
      "Building my portfolio from scratch. Understanding every line. Making Claude my teacher. Creating an identity I earned — not inherited, not borrowed. Unafraid of the storm.",
  },
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current || !storyRef.current) return;
    // Timeline line draws itself on scroll
    
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      },
    );
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
      },
    );
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }
  }, []);
  return (
    <section id="about" className="min-h-screen px-16 py-32">
      {/* Section header */}
      <div ref={storyRef} className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          The Story
        </span>
      </div>

      {/* Section title */}
      <div ref={cardsRef}>
        <h2
          className="text-6xl font-bold text-[#f0f4ff] mb-6 leading-tight"
          style={{ fontFamily: "Clash Display" }}
        >
          Not a resume. <br />
          <span className="text-[#2563eb]">A journey.</span>
        </h2>

        <p className="text-[#6b8cba] text-lg max-w-xl mb-24 leading-relaxed">
          Before the code, before the products, before everything — there was a
          curious kid building wooden block cities and wondering how the world
          works{" "}
        </p>
      </div>
      <br />
      <br />

      {/* Timeline */}
      <div className="relative timeline-container">
        {/* Vertical line container */}
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-[#1a2942]/30">
          {/* Animated fill line */}
          <div
            ref={lineRef}
            className="w-full bg-[#2563eb]"
            style={{ height: "0%" }}
          />
        </div>
        {/* Timeline items */}
        <div className="flex flex-col gap-16">
          {timeline.map((item, index) => (
            <ScrollReveal key={index}>
              <div key={index} className="flex items-start gap-12">
                {/* Year */}
                <div
                  className="hoverable w-24 text-right flex-shrink-0 pt-1"
                  style={{ fontFamily: "Clash Display" }}
                >
                  <span className="text-[#2563eb] text-sm font-bold tracking-wider">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-3 h-3 rounded-full bg-[#2563eb] relative z-10"></div>
                </div>

                {/* Content */}
                <div className=" flex-1 pb-4">
                  <h3
                    className="text-xl font-bold text-[#f0f4ff] mb-3"
                    style={{ fontFamily: "Clash Display" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#6b8cba] text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
