'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const skills = {
  "Languages": ["Python", "JavaScript", "C++", "C", "Java", "HTML", "CSS"],
  "Frameworks & Tools": ["React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
  "Design": ["Graphic Design", "Digital Art", "UI Design", "Figma"],
  "Currently Learning": ["GSAP", "Three.js", "Framer Motion", "Node.js"],
}

export default function Skills() {
  const tagsRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const storyRef = useRef<HTMLDivElement>(null) 


  useEffect(() => {
    if (!headingRef.current || !tagsRef.current||!storyRef.current) return

    // Heading animation
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
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        }
      }
    )

    // Tags stagger
    const tags = tagsRef.current.querySelectorAll('span')

    gsap.fromTo(tags,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: tagsRef.current,
          start: 'top 65%',
        }
      }
    )
  }, [])
  return (
    <section id="skills" className="min-h-screen px-16 py-32">

      {/* Section header */}
      <div ref={storyRef}className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Arsenal
        </span>
      </div>

      <h2 
        ref={headingRef}
        className="text-6xl font-bold text-[#f0f4ff] mb-16 leading-tight"
        style={{ fontFamily: 'Clash Display' }}>
        What I <br />
        <span className="text-[#2563eb]">Work With</span>
      </h2>

      {/* Skills grid */}
      <div ref={tagsRef} >
        <div className="grid grid-cols-2 gap-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>

            {/* Category title */}
            <h3
              className="text-sm text-[#6b8cba] tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Clash Display' }}>
              {category}
            </h3>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="hoverable px-4 py-2 border border-[#1a2942] text-[#f0f4ff] text-sm hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
      </div>

    </section>
  )
}