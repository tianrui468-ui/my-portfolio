"use client"

import { useEffect, useRef, useState } from 'react'

interface ParallaxHeroProps {
  children: React.ReactNode
  className?: string
}

export default function ParallaxHero({ children, className = '' }: ParallaxHeroProps) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollPercent = (rect.top - window.innerHeight) / (rect.height + window.innerHeight)
        // Limit offset between -100 and 100
        const newOffset = Math.max(-100, Math.min(100, scrollPercent * 100))
        setOffset(newOffset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Background layer - moves slower */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/5 to-mint-green/5" />
      </div>

      {/* Content layer - moves faster */}
      <div
        className="relative z-10"
        style={{
          transform: `translateY(${offset * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}