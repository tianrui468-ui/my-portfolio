"use client"

import { useState, useEffect, useRef } from 'react'

interface Ripple {
  x: number
  y: number
  id: number
}

export default function CursorEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [scrollY, setScrollY] = useState(0)
  const rippleId = useRef(0)

  // Mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Click ripple effect
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: rippleId.current++
      }
      setRipples(prev => [...prev, newRipple])
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)
    }

    // Scroll parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Apply parallax effect to elements with data-parallax attribute
  useEffect(() => {
    const elements = document.querySelectorAll('[data-parallax]')
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        const speed = parseFloat(el.dataset.parallax || '0.1')
        const yOffset = scrollY * speed
        el.style.transform = `translateY(${yOffset}px)`
      }
    })
  }, [scrollY])

  return (
    <>
      {/* Purple glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] transition-all duration-300"
        style={{
          background: `radial-gradient(100px at ${position.x}px ${position.y}px, rgba(184, 179, 232, 0.3), transparent 80%)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Small cursor dot */}
      <div
        className="pointer-events-none fixed z-[10000] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-accent/50 blur-sm transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed z-[9998] rounded-full border-2 border-purple-accent/70"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '0px',
            height: '0px',
            animation: 'ripple 1s linear forwards',
          }}
        />
      ))}

      {/* Add CSS for ripple animation */}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.7;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
        /* Subtle parallax for all elements */
        .parallax-element {
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </>
  )
}