import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Programs } from '@/app/components/Programs'
import { Team } from '@/app/components/Team'
import { Gallery } from '@/app/components/Gallery'
import { BookingCTA } from '@/app/components/BookingCTA'
import { Footer } from '@/app/components/Footer'
import { ScrollProgress } from '@/app/effects/ScrollProgress'

export const metadata: Metadata = {
  title: 'Émeraude — Салон красоты премиум-класса, Москва',
  description: 'Индивидуальные программы ухода, косметология класса люкс, авторские программы. Запись на консультацию.',
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress targetId="booking" />
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <div className="divider" aria-hidden="true" />
        <Programs />
        <div className="divider" aria-hidden="true" />
        <Team />
        <div className="divider" aria-hidden="true" />
        <Gallery />
        <div className="divider" aria-hidden="true" />
        <BookingCTA id="booking" />
      </main>
      <Footer />
    </>
  )
}