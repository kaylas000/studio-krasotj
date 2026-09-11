'use client'

import { useEffect, useRef, useState } from 'react'
import { IconMenu, MenuItem } from '@radix-ui/react-icons'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-section-x py-phi3 flex items-center justify-between flex-col md:flex-row gap-phi2">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2 text-2xl font-display font-bold text-text no-underline">
          <span className="text-accent">ÉMERAUDE</span><em>beauty atelier</em>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-phi6">
          <a href="#philosophy" className="text-text-muted hover:text-primary transition-colors">Философия</a>
          <a href="#programs" className="text-text-muted hover:text-primary transition-colors">Программы</a>
          <a href="#team" className="text-text-muted hover:text-primary transition-colors">Команда</a>
          <a href="#gallery" className="text-text-muted hover:text-primary transition-colors">Галерея</a>
          <a href="#booking" className="text-primary font-medium">Запись</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="burger"
          className="md:hidden p-2 hover:bg-accent/5 transition-colors"
          aria-label="Меню"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden {isMenuOpen && 'block'} absolute top-full left-0 right-0 bg-background mt-phi4 hidden-sm-down:block shadow-lg">
          <a href="#philosophy" className="block padding phi2 text-center text-text hover:text-primary transition-colors">Философия</a>
          <a href="#programs" className="block padding phi2 text-center text-text hover:text-primary transition-colors">Программы</a>
          <a href="#team" className="block padding phi2 text-center text-text hover:text-primary transition-colors">Команда</a>
          <a href="#gallery" className="block padding phi2 text-center text-text hover:text-primary transition-colors">Галерея</a>
          <a href="#booking" className="block padding phi2 text-center text-primary font-medium">Запись</a>
        </div>
      </div>
    </nav>
  )
}