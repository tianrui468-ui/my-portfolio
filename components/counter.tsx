"use client"

import { useEffect, useRef, useState } from 'react'
import { useEditMode } from './edit-mode-provider'
import EditableText from './editable-text'

interface CounterProps {
  id: string
  value: string // e.g., "50+", "100%", "10+", "24/7"
  className?: string
}

export default function Counter({ id, value, className = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const { isEditMode } = useEditMode()

  // Parse numeric value from string (e.g., "50+" -> 50, "100%" -> 100, "24/7" -> 24)
  const parseValue = (val: string): number => {
    // Extract first number from string
    const match = val.match(/\d+/)
    if (match) {
      return parseInt(match[0], 10)
    }
    return 0
  }

  const targetValue = parseValue(value)
  const suffix = value.replace(/^\d+/, '') // Get suffix like "+", "%", "/7"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const currentElement = counterRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Animation duration in milliseconds
    const duration = 2000
    const startTime = Date.now()
    const startValue = 0
    const endValue = targetValue

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4)

      const currentValue = Math.floor(startValue + easeOut * (endValue - startValue))
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, targetValue])

  // In edit mode, show editable text instead of counter
  if (isEditMode) {
    return (
      <EditableText id={id} as="div" className={className}>
        {value}
      </EditableText>
    )
  }

  return (
    <div ref={counterRef} className={className}>
      {isVisible ? `${count}${suffix}` : `0${suffix}`}
    </div>
  )
}