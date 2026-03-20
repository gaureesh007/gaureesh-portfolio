'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Ambitions() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
    const storyRef = useRef<HTMLDivElement>(null) 


  useEffect(() => {
    if (!headingRef.current || !cardsRef.current||!storyRef.current) return
    gsap.fromTo(storyRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
        }
       }
    )
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo(cardsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
        }
      }
    )
  }, [])
  return (
    <section id="ambitions" className="min-h-screen px-16 py-32 flex flex-col justify-center">

      {/* Section header */}
      <div ref={storyRef} className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Vision
        </span>
      </div>

      {/* Big statement */}
      <h2
        ref={headingRef}
        
        className="text-7xl font-bold text-[#f0f4ff] max-w-4xl leading-tight mb-12"
        style={{ opacity :0, fontFamily: 'Clash Display' }}>
        I don't want to just work in tech.
        <br />
        <span className="text-[#2563eb]">I want to shape it.</span>
      </h2>

      {/* Vision paragraphs */}
      <div ref={cardsRef} className="grid grid-cols-3 gap-12 max-w-5xl">

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Build AI Systems
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            I want to build intelligent systems that don't just process data — they understand context, feel human, and solve real problems.
          </p>
        </div>

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Start Something
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            Entrepreneurship isn't a career path for me — it's a mindset. I want to build products that create real value and reach real people.
          </p>
        </div>

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Create & Inspire
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            Art and technology are not opposites. I want to prove that the most powerful products are the ones that move you — technically and emotionally.
          </p>
        </div>

      </div>

    </section>
  )
}