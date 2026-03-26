"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MandalaShape from "./MandalaShape";

gsap.registerPlugin(ScrollTrigger);

export default function Mandala() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
  if (!mounted) return
  const container = containerRef.current
  if (!container) return

  // NO continuous rotation — only scroll driven
  gsap.set(container, { rotation: 0 })

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const velocity = self.getVelocity()
      const speed = Math.abs(velocity) / 3000
      const direction = velocity > 0 ? 1 : -1

      // Rotate based on scroll velocity
      gsap.to(container, {
        rotation: `+=${direction * speed * 15}`,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  })

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}, [mounted])

  if (!mounted) return null;

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        right: "-500px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "1000px",
        height: "1000px",
        zIndex: 0,
        maskImage:
          "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)",
      }}
    >
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        <MandalaShape />
      </div>
    </div>
  );
}
