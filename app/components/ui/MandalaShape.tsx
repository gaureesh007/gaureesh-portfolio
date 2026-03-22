
'use client'

import React, { useState, useEffect } from 'react'

export default function MandalaShape() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const c = 400 // center
const elements: React.ReactElement[] = []
  // Helper: generate points on a circle
  const point = (angle: number, radius: number) => ({
    x: c + radius * Math.cos((angle * Math.PI) / 180),
    y: c + radius * Math.sin((angle * Math.PI) / 180),
  })

  // Helper: draw N items evenly around a circle
const ring = (count: number, fn: (angle: number, i: number) => void) => {
  Array.from({ length: count }, (_, i) => fn((i * 360) / count, i))
}

  // ── Layer 1: innermost dot ring ──
  ring(8, (a, i) => {
    const p = point(a, 40)
    elements.push(<circle key={`l1-${i}`} cx={p.x} cy={p.y} r={3} fill="#3b82f6" opacity="0.9" />)
  })

  // ── Layer 2: small petal ring ──
  ring(8, (a, i) => {
    const p1 = point(a, 55)
    const p2 = point(a + 22.5, 75)
    const p3 = point(a + 45, 55)
    elements.push(
      <path key={`l2-${i}`}
        d={`M ${c} ${c} Q ${p2.x} ${p2.y} ${p3.x} ${p3.y}`}
        fill="none" stroke="#2563eb" strokeWidth="0.8" opacity="0.7"
      />
    )
  })

  // ── Layer 3: circle ring ──
  ring(12, (a, i) => {
    const p = point(a, 90)
    elements.push(<circle key={`l3-${i}`} cx={p.x} cy={p.y} r={8} fill="none" stroke="#3b82f6" strokeWidth="0.6" opacity="0.8" />)
  })

  // ── Layer 4: diamond ring ──
  ring(12, (a, i) => {
    const p = point(a, 90)
    const size = 6
    elements.push(
      <polygon key={`l4-${i}`}
        points={`${p.x},${p.y - size} ${p.x + size},${p.y} ${p.x},${p.y + size} ${p.x - size},${p.y}`}
        fill="#1d4ed8" stroke="#3b82f6" strokeWidth="0.4" opacity="0.6"
      />
    )
  })

  // ── Layer 5: medium petal ring ──
  ring(16, (a, i) => {
    const p1 = point(a, 110)
    const ctrl = point(a + 11.25, 140)
    const p2 = point(a + 22.5, 110)
    elements.push(
      <path key={`l5-${i}`}
        d={`M ${p1.x} ${p1.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`}
        fill="none" stroke="#2563eb" strokeWidth="0.7" opacity="0.7"
      />
    )
  })

  // ── Layer 6: dot ring ──
  ring(24, (a, i) => {
    const p = point(a, 150)
    elements.push(<circle key={`l6-${i}`} cx={p.x} cy={p.y} r={2.5} fill="#3b82f6" opacity="0.8" />)
  })

  // ── Layer 7: arch ring ──
  ring(16, (a, i) => {
    const p1 = point(a, 160)
    const ctrl = point(a + 11.25, 185)
    const p2 = point(a + 22.5, 160)
    elements.push(
      <path key={`l7-${i}`}
        d={`M ${p1.x} ${p1.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`}
        fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.6"
      />
    )
  })

  // ── Layer 8: large circle ring ──
  ring(16, (a, i) => {
    const p = point(a, 195)
    elements.push(<circle key={`l8-${i}`} cx={p.x} cy={p.y} r={10} fill="none" stroke="#2563eb" strokeWidth="0.6" opacity="0.7" />)
  })

  // ── Layer 9: teardrop ring ──
  ring(24, (a, i) => {
    const base = point(a, 215)
    const tip = point(a, 235)
    const ctrl = point(a + 7.5, 228)
    elements.push(
      <path key={`l9-${i}`}
        d={`M ${base.x} ${base.y} Q ${ctrl.x} ${ctrl.y} ${tip.x} ${tip.y}`}
        fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.65"
      />
    )
  })

  // ── Layer 10: dot ring ──
  ring(32, (a, i) => {
    const p = point(a, 240)
    elements.push(<circle key={`l10-${i}`} cx={p.x} cy={p.y} r={2} fill="#2563eb" opacity="0.7" />)
  })

  // ── Layer 11: outer petal ring ──
  ring(24, (a, i) => {
    const p1 = point(a, 255)
    const ctrl = point(a + 7.5, 285)
    const p2 = point(a + 15, 255)
    elements.push(
      <path key={`l11-${i}`}
        d={`M ${p1.x} ${p1.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`}
        fill="none" stroke="#2563eb" strokeWidth="0.6" opacity="0.6"
      />
    )
  })

  // ── Layer 12: outer circle ring ──
  ring(24, (a, i) => {
    const p = point(a, 295)
    elements.push(<circle key={`l12-${i}`} cx={p.x} cy={p.y} r={7} fill="none" stroke="#1d4ed8" strokeWidth="0.5" opacity="0.55"  />)
  })

  // ── Layer 13: outermost dot ring ──
  ring(48, (a, i) => {
    const p = point(a, 320)
    elements.push(<circle key={`l13-${i}`} cx={p.x} cy={p.y} r={1.5} fill="#3b82f6" opacity="0.6" />)
  })

  // ── Layer 14: final arch ring ──
  ring(32, (a, i) => {
    const p1 = point(a, 335)
    const ctrl = point(a + 5.625, 355)
    const p2 = point(a + 11.25, 335)
    elements.push(
      <path key={`l14-${i}`}
        d={`M ${p1.x} ${p1.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`}
        fill="none" stroke="#2563eb" strokeWidth="0.4" opacity="0.5"
      />
    )
  })

  return (
    <svg viewBox="0 0 800 800" width="1000" height="1000">
      {/* Center core */}
      <circle cx={c} cy={c} r={6} fill="#3b82f6" opacity="1" />
      <circle cx={c} cy={c} r={15} fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.9" />
      <circle cx={c} cy={c} r={25} fill="none" stroke="#3b82f6" strokeWidth="0.6" opacity="0.7" />
      <circle cx={c} cy={c} r={35} fill="none" stroke="#1d4ed8" strokeWidth="0.4" opacity="0.5" />

      {/* All generated layers */}
      {elements}

      {/* Outer boundary rings */}
      <circle cx={c} cy={c} r={358} fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.4" />
      <circle cx={c} cy={c} r={368} fill="none" stroke="#1d4ed8" strokeWidth="0.3" opacity="0.3" />
      <circle cx={c} cy={c} r={378} fill="none" stroke="#3b82f6" strokeWidth="0.2" opacity="0.2" />
    </svg>
  )
}