'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contentRef = useRef<HTMLDivElement>(null)
    const storyRef = useRef<HTMLDivElement>(null) 


  useEffect(() => {
    if (!contentRef.current||!storyRef.current) return
    gsap.fromTo(storyRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
        }
       }
    )
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 50%',
        }
      }
    )
  }, [])
  return (
    <section id="contact" className="min-h-screen px-16 py-32 flex flex-col justify-center">
      <div ref={contentRef}>

      {/* Section header */}
      <div ref={storyRef} className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Contact
        </span>
      </div>

      {/* Big CTA */}
      <h2
        className="text-7xl font-bold text-[#f0f4ff] max-w-2xl leading-tight mb-6"
        style={{ fontFamily: 'Clash Display' }}>
        Let's build something
        <span className="text-[#2563eb]"> real.</span>
      </h2>

      <p className="text-[#6b8cba] text-lg max-w-md mb-16 leading-relaxed">
        Whether it's a project, a collaboration, or just a conversation — I'm always open. Let's connect.
      </p>

      {/* Links */}
      <div className="flex flex-col gap-6">

        <a 
          href="mailto:gaureeshkeshari006@gmail.com"
          className="flex items-center gap-4 group w-fit">
          <div className="w-8 h-px bg-[#1a2942] group-hover:bg-[#2563eb] group-hover:w-16 transition-all duration-300"></div>
          <span className="text-[#f0f4ff] text-lg group-hover:text-[#2563eb] transition-colors duration-300"
                style={{ fontFamily: 'Clash Display' }}>
            gaureeshkeshari006@gmail.com
          </span>
        </a>

        <a 
          href="https://github.com/gaureesh007"
          className="flex items-center gap-4 group w-fit">
          <div className="w-8 h-px bg-[#1a2942] group-hover:bg-[#2563eb] group-hover:w-16 transition-all duration-300"></div>
          <span className="text-[#f0f4ff] text-lg group-hover:text-[#2563eb] transition-colors duration-300"
                style={{ fontFamily: 'Clash Display' }}>
            GitHub
          </span>
        </a>

        <a
          href="https://linkedin.com"
          className="flex items-center gap-4 group w-fit">
          <div className="w-8 h-px bg-[#1a2942] group-hover:bg-[#2563eb] group-hover:w-16 transition-all duration-300"></div>
          <span className="text-[#f0f4ff] text-lg group-hover:text-[#2563eb] transition-colors duration-300"
                style={{ fontFamily: 'Clash Display' }}>
            LinkedIn
          </span>
        </a>

      </div>

      {/* Footer line */}
      <div className="mt-32 pt-8 border-t border-[#1a2942] flex items-center justify-between">
        <span className="text-[#354f73] text-sm">
          © 2025 Gaureesh Keshari
        </span>
        <span className="text-[#354f73] text-sm"
              style={{ fontFamily: 'Clash Display' }}>
          Built with logic — designed with emotion.
        </span>
      </div>

    </div>
    </section>
  )
}