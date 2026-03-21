// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'

// export default function Hero() {
//   const tagRef = useRef<HTMLDivElement>(null)
//   const nameRef = useRef<HTMLHeadingElement>(null)
//   const roleRef = useRef<HTMLParagraphElement>(null)
//   const statementRef = useRef<HTMLParagraphElement>(null)
//   const buttonsRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.2 })

//     tl.fromTo(tagRef.current,
//       { opacity: 0, x: -20 },
//       { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
//     )
//     .fromTo(nameRef.current,
//       { opacity: 0, y: 60 },
//       { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
//       '-=0.3'
//     )
//     .fromTo(roleRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
//       '-=0.4'
//     )
//     .fromTo(statementRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
//       '-=0.3'
//     )
//     .fromTo(buttonsRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
//       '-=0.3'
//     )
//   }, [])
//   return (
//     <section className="h-screen flex items-center justify-between pl-16 pr-16 relative overflow-hidden">

//   {/* Background glow — artistic element */}
//   <div
//     className="absolute pointer-events-none"
//     style={{
//       width: '600px',
//       height: '600px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)',
//       top: '50%',
//       left: '20%',
//       transform: 'translate(-50%, -50%)',
//       filter: 'blur(40px)',
//     }}>
//   </div>

//   {/* Second smaller glow — depth */}
//   <div
//     className="absolute pointer-events-none"
//     style={{
//       width: '300px',
//       height: '300px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
//       top: '30%',
//       left: '40%',
//       transform: 'translate(-50%, -50%)',
//       filter: 'blur(60px)',
//     }}>
//   </div>

//       {/* Left side — text content */}
//       <div className="flex flex-col gap-6 z-10 max-w-2xl">

//         {/* Greeting tag */}
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-px bg-[#2563eb]"></div>
//           <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
//             Available for opportunities
//           </span>
//         </div>

//         {/* Name */}
//         <h1
//           className="text-8xl font-bold text-[#f0f4ff] leading-none"
//           style={{ fontFamily: 'Clash Display' }}>
//           Gaureesh<br />
//           <span className="text-[#2563eb]">Keshari</span>
//         </h1>

//         {/* Role */}
//         <p className="text-2xl text-[#6b8cba]"
//            style={{ fontFamily: 'Clash Display' }}>
//           Engineer. Entrepreneur. Artist.
//         </p>

//         {/* Brand statement */}
//         <p className="text-lg text-[#354f73] max-w-md leading-relaxed">
//           I build with logic — and design with emotion.
//           I create products that speak to minds and move hearts.
//         </p>

//         {/* CTA buttons */}
//         <div className="flex items-center gap-4 mt-4">
//           <a
//             href="#work"
//             className="px-8 py-4 bg-[#2563eb] text-[#f0f4ff] text-sm font-medium hover:bg-[#3b82f6] transition-colors duration-300"
//             style={{ fontFamily: 'Clash Display' }}>
//             See My Work
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-4 border border-[#1a2942] text-[#6b8cba] text-sm font-medium hover:text-[#f0f4ff] hover:border-[#2563eb] transition-all duration-300"
//             style={{ fontFamily: 'Clash Display' }}>
//             Get In Touch
//           </a>
//         </div>

//       </div>

//       {/* Right side — image placeholder */}
//       <div className="relative w-96 h-96 flex-shrink-0">
//         <div className="w-full h-full border border-[#1a2942] flex items-center justify-center">
//           <span className="text-[#354f73] text-sm">Your Photo Here</span>
//         </div>
//       </div>

//     </section>
//   )
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const tagRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      tagRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        statementRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3",
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3",
      );
    // Role cycling
    // const roles = ["Engineer", "Entrepreneur", "Artist"];
    // let current = 0;

    // const cycleRole = () => {
    //   const el = document.getElementById("cycling-role");
    //   if (!el) return;

    //   current = (current + 1) % roles.length;

    //   gsap.to(el, {
    //     y: -30,
    //     opacity: 0,
    //     duration: 0.5,
    //     ease: "power2.in",
    //     onComplete: () => {
    //       el.textContent = roles[current];
    //       gsap.fromTo(
    //         el,
    //         { y: 30, opacity: 0 },
    //         { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    //       );
    //     },
    //   });
    // };

    // const interval = setInterval(cycleRole, 2000);

    // return () => {
    //   clearInterval(interval);
    // };
    // Typewriter effect
const roles = ['Engineer', 'Entrepreneur', 'Artist']
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typeTimer: ReturnType<typeof setTimeout>

const typeWriter = () => {
  
  const el = document.getElementById('cycling-role')
  if (!el) return

  const currentRole = roles[roleIndex]
  const typingSpeed = isDeleting ? 50 : 85 + Math.random() * 40

  if (!isDeleting) {
    // Typing forward
    charIndex++
    el.textContent = currentRole.slice(0, charIndex)

    if (charIndex === currentRole.length) {
      // Finished typing — pause then start deleting
      isDeleting = true
      typeTimer = setTimeout(typeWriter, 2000)
    } else {
      typeTimer = setTimeout(typeWriter, typingSpeed)

    }
  } else {
    // Deleting
    charIndex--
    el.textContent = currentRole.slice(0, charIndex)

    if (charIndex === 0) {
      // Finished deleting — move to next role
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      typeTimer = setTimeout(typeWriter, 500)
    } else {
      typeTimer = setTimeout(typeWriter, typingSpeed)
    }
  }
}

// Blinking cursor
const cursorEl = document.getElementById('cursor-blink')
let cursorVisible = true
const cursorTimer = setInterval(() => {
  if (cursorEl) {
    cursorVisible = !cursorVisible
    cursorEl.style.opacity = cursorVisible ? '1' : '0'
  }
}, 500)

// Start typewriter after hero animation finishes
typeTimer = setTimeout(typeWriter, 1800)

return () => {
  clearTimeout(typeTimer)
  clearInterval(cursorTimer)
}
  }, []);

  return (
    <section className="h-screen flex items-center justify-between pl-16 pr-16 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
      ></div>

      <div
        className="absolute pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          top: "30%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Left side */}
      <div className="flex flex-col gap-6 z-10 max-w-2xl">
        {/* Tag */}
        <div
          ref={tagRef}
          className="flex items-center gap-3"
          style={{ opacity: 0 }}
        >
          <div className="w-8 h-px bg-[#2563eb]"></div>
          <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-8xl font-bold text-[#f0f4ff] leading-none"
          style={{ fontFamily: "Clash Display", opacity: 0 }}
        >
          Gaureesh
          <br />
          <span className="text-[#2563eb]">Keshari</span>
        </h1>

        {/* Role */}
{/* <div
  ref={roleRef}
  className="flex items-center gap-3"
  style={{ opacity: 0 }}
>
  <span
    className="text-2xl text-[#6b8cba]"
    style={{ fontFamily: "Clash Display" }}
  >
    I am an
  </span>
  <span
    id="cycling-role"
    className="text-2xl text-[#2563eb] font-bold"
    style={{ fontFamily: "Clash Display" }}
  >
    Engineer
  </span>
</div> */}
  {/* Role */}
<div
  ref={roleRef}
  className="flex items-center gap-3"
  style={{ opacity: 0 }}
>
  <span
    className="text-2xl text-[#6b8cba]"
    style={{ fontFamily: "Clash Display" }}
  >
    I am an
  </span>
  <span
    id="cycling-role"
    className="text-2xl text-[#f0f4ff] font-bold"
    style={{ fontFamily: "Clash Display" }}
  >
  </span>
  <span
    id="cursor-blink"
    className="text-2xl text-[#f0f4ff] font"
    style={{ fontFamily: "Clash Display" }}
  >
    |
  </span>
</div>

        {/* Statement */}
        <p
          ref={statementRef}
          className="text-lg text-[#354f73] max-w-md leading-relaxed"
          style={{ opacity: 0 }}
        >
          I build with logic — and design with emotion. I create products that
          speak to minds and move hearts.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex items-center gap-4 mt-4"
          style={{ opacity: 0 }}
        >
          <a
            href="#work"
            className="px-8 py-4 bg-[#2563eb] text-[#f0f4ff] text-sm font-medium hover:bg-[#3b82f6] transition-colors duration-300"
            style={{ fontFamily: "Clash Display" }}
          >
            See My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-[#1a2942] text-[#6b8cba] text-sm font-medium hover:text-[#f0f4ff] hover:border-[#2563eb] transition-all duration-300"
            style={{ fontFamily: "Clash Display" }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="relative w-96 h-96 flex-shrink-0">
        <div className="w-full h-full border border-[#1a2942] flex items-center justify-center">
          <span className="text-[#354f73] text-sm">Your Photo Here</span>
        </div>
      </div>
    </section>
  );
}
