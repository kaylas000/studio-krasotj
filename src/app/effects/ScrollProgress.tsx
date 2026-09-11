'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ScrollProgress({ targetId = 'booking' }: { targetId?: string }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const handler = () => {
      const rect = target.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const isNear = rect.top < viewportHeight * 1.2
      setVisible(isNear)

      if (isNear) {
        const p = 1 - Math.max(0, rect.top) / (viewportHeight * 1.2)
        setProgress(Math.min(1, Math.max(0, p)))
      }
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [targetId])

  if (!visible) return null

  return (
    <div 
      className={cn(
        'fixed top-0 left-0 h-[3px] z-[100] bg-accent origin-left',
        'transition-transform duration-100 ease-linear'
      )}
      style={{ transform: `scaleX(${progress})` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Прогресс прокрутки к форме записи"
    />
  )
}