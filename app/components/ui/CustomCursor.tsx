'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const dot = dotRef.current
  const ring = ringRef.current
  if (!dot || !ring) return

  document.body.style.cursor = 'none'

  // quickTo is GSAP's optimized method for rapid continuous updates
  const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.1 })
  const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.1 })
  const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
  const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

  const moveCursor = (e: MouseEvent) => {
    moveDotX(e.clientX)
    moveDotY(e.clientY)
    moveRingX(e.clientX)
    moveRingY(e.clientY)
  }

  const handleMouseEnter = () => {
    gsap.to(ring, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
    gsap.to(dot, { scale: 0, duration: 0.3 })
  }

  const handleMouseLeave = () => {
    gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' })
    gsap.to(dot, { scale: 1, duration: 0.3 })
  }

  window.addEventListener('mousemove', moveCursor)

  const hoverables = document.querySelectorAll('a, button,.hoverable')
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
  })

  return () => {
    window.removeEventListener('mousemove', moveCursor)
    document.body.style.cursor = 'auto'
    hoverables.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    })
  }
}, [])

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#2563eb',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1px solid rgba(37, 99, 235, 0.6)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}