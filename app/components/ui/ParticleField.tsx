'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ============================================
    // STEP 1 — CREATE THE 3D WORLD
    // ============================================

    // Scene = empty 3D world, everything lives here
    const scene = new THREE.Scene()

    // Camera = your eyes looking into the scene
    // 60 = field of view (how wide you can see)
    // aspect = width/height ratio of the canvas
    // 0.1 and 1000 = minimum and maximum view distance
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    // Pull camera back 5 units so we can see the scene
    camera.position.z = 5

    // Renderer = the engine that draws everything onto canvas
    // alpha: true = transparent background, your dark page shows through
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // Add the canvas to the page
    mount.appendChild(renderer.domElement)

    // ============================================
    // STEP 2 — CREATE THE PARTICLES
    // ============================================

    const particleCount = 700

    // Float32Array = a fast array of numbers
    // Each particle needs 3 numbers: x, y, z position
    // So total length = particleCount * 3
    const positions = new Float32Array(particleCount * 3)

    // Store original positions so particles can return home
    const originalPositions = new Float32Array(particleCount * 3)

    // Place each particle at a random position
    for (let i = 0; i < particleCount; i++) {
      // i * 3 because each particle takes 3 slots in the array
      const x = (Math.random() - 0.5) * 12  // spread across 12 units wide
      const y = (Math.random() - 0.5) * 8   // spread across 8 units tall
      const z = (Math.random() - 0.5) * 2   // slight depth variation

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Remember the starting position
      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z
    }

    // BufferGeometry = the shape container
    // We tell it: "here are the positions of all my points"
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    // PointsMaterial = how each particle looks
    // Each vertex (point) in the geometry becomes a dot
    const material = new THREE.PointsMaterial({
      color: 0x3b82f6,    // blue color
      size: 0.02,          // size of each dot
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true, // farther particles appear smaller (depth)
    })

    // Points = combine geometry + material = actual particle system
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // ============================================
    // STEP 3 — MOUSE TRACKING IN 3D SPACE
    // ============================================

    // mouse3D stores WHERE in the 3D world the mouse is pointing
    // Start far off screen so nothing is affected before mouse enters
    const mouse3D = new THREE.Vector3(9999, 9999, 0)

    const handleMouseMove = (e: MouseEvent) => {
      if (!mount) return
      const rect = mount.getBoundingClientRect()

      // Convert mouse pixel position to -1 to +1 range (NDC)
      // NDC = Normalized Device Coordinates, what Three.js uses
      // Left edge = -1, right edge = +1
      // Top edge = +1, bottom edge = -1
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1

      // Shoot a ray from camera through mouse position into 3D world
      // Find where that ray hits the z=0 plane (where particles live)
      const vector = new THREE.Vector3(ndcX, ndcY, 0.5)
      vector.unproject(camera)
      const dir = vector.sub(camera.position).normalize()
      const distance = -camera.position.z / dir.z
      mouse3D.copy(camera.position).addScaledVector(dir, distance)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // ============================================
    // STEP 4 — ANIMATION LOOP
    // ============================================

    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      // Schedule next frame — creates ~60fps loop
      animationId = requestAnimationFrame(animate)

      // How many seconds since we started
      const elapsed = clock.getElapsedTime()

      // Slow gentle rotation of the whole field
      particles.rotation.y = elapsed * 0.02
      particles.rotation.x = elapsed * 0.008

      const pos = geometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3      // x index in array
        const iy = i * 3 + 1  // y index in array

        // Distance from this particle to the mouse
        const dx = pos[ix] - mouse3D.x
        const dy = pos[iy] - mouse3D.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        const repelRadius = 1.5  // how far mouse influence reaches

        if (dist < repelRadius && dist > 0.01) {
          // Mouse is close — push particle away gently
          // force goes from 0 (at edge of radius) to 1 (at mouse position)
          const force = (repelRadius - dist) / repelRadius

          // Smooth push — lerp current position toward repelled position
          // lerp formula: current + (target - current) * speed
          // speed of 0.03 means moves 3% closer to target each frame = smooth
          const targetX = originalPositions[ix] + (dx / dist) * force * 0.6
          const targetY = originalPositions[iy] + (dy / dist) * force * 0.6

          pos[ix] += (targetX - pos[ix]) * 0.03
          pos[iy] += (targetY - pos[iy]) * 0.03

        } else {
          // Mouse is far — drift back to original position slowly
          // 0.02 = very slow return, feels like floating back
          pos[ix] += (originalPositions[ix] - pos[ix]) * 0.02
          pos[iy] += (originalPositions[iy] - pos[iy]) * 0.02
        }

        // Breathing effect — gentle up/down wave
        // sin() creates a smooth oscillation between -1 and +1
        // Each particle gets a different phase based on its X position
        // So they don't all move up/down together — creates a wave
        pos[iy] += Math.sin(elapsed * 0.3 + originalPositions[ix] * 0.5) * 0.001
      }

      // Tell Three.js positions changed — re-upload to GPU
      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // ============================================
    // STEP 5 — HANDLE RESIZE
    // ============================================

    const handleResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // ============================================
    // STEP 6 — CLEANUP
    // ============================================

    // When component unmounts — stop everything
    // Prevents memory leaks
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}