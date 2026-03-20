'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const projects = [
  {
    title: "Moodscape",
    tag: "AI + Creative",
    description: "A living visual mood journal. Type how you feel — the world transforms around your words.",
    status: "In Progress",
    color: "#2563eb"
  },
  {
    title: "Voice Assistant",
    tag: "Python + AI",
    description: "Voice-controlled assistant built from scratch. Inspired by Iron Man. Pure logic, pure curiosity.",
    status: "Completed",
    color: "#3b82f6"
  },
  {
    title: "Netflix Clone",
    tag: "HTML + CSS",
    description: "A pixel-perfect Netflix UI clone. Built to study world-class design systems.",
    status: "Completed",
    color: "#1d4ed8"
  },
]

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const storyRef = useRef<HTMLDivElement>(null) 


  useEffect(() => {
    if (!cardsRef.current||!headingRef.current||!storyRef.current) return

    const cards = cardsRef.current.children
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
    gsap.fromTo(storyRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
        }
       }
    )
    gsap.fromTo(cards,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 65%',
        }
      }
    )
  }, [])
  return (
    <section id="work" className="min-h-screen px-16 py-32">
      
      {/* Section header */}
      <div ref={storyRef} className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Selected Work
        </span>
      </div>

      <h2 ref={headingRef}
        className="text-6xl font-bold text-[#f0f4ff] mb-16 max-w-lg leading-tight"
        style={{ fontFamily: 'Clash Display' }}>
        Things I've <br />
        <span className="text-[#2563eb]">Built</span>
      </h2>
      <br /><br />

      {/* Projects grid */}
      <div ref={cardsRef} className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group border border-[#1a2942] p-8 flex items-center justify-between hover:border-[#2563eb] transition-all duration-500 cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-8">
              <span 
                className="text-5xl font-bold text-[#0d1526]"
                style={{ fontFamily: 'Clash Display' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 
                  className="text-2xl font-bold text-[#f0f4ff] mb-2 group-hover:text-[#2563eb] transition-colors duration-300"
                  style={{ fontFamily: 'Clash Display' }}>
                  {project.title}
                </h3>
                <p className="text-[#6b8cba] text-sm max-w-md">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <span className="text-xs text-[#6b8cba] border border-[#1a2942] px-3 py-1">
                {project.tag}
              </span>
              <span className={`text-xs ${project.status === 'In Progress' ? 'text-[#2563eb]' : 'text-[#354f73]'}`}>
                {project.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}