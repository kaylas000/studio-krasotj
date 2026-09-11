import Image from 'next/image'
import { ParallaxHero } from '@/app/effects/ParallaxHero'
import { Button } from '@/app/ui/Button'
import { Container } from '@/app/ui/Container'
import { FadeInUp } from '@/app/effects/FadeInUp'

export function Hero() {
  return (
    <ParallaxHero 
      src="/images/hero-interior.avif" 
      alt="Интерьер премиального салона красоты: мягкий свет, текстуры мрамора и шёлка, уютная зона ожидания"
      overlay={
        <Container size="display">
          <FadeInUp delay={0.1} className="w-full max-w-[600px]">
            <span className="caption mb-phi2 block">Москва · Пречистенский per., 12</span>
            <h1 id="hero-title" className="text-display-xl text-cream mb-phi3">
              Эстетика как образ жизни
            </h1>
            <p className="lead text-cream/90 mb-phi5 max-w-[500px]">
              Индивидуальные программы ухода за лицом и телом на базе люксовых брендов. 
              Экспертиза, приватность, безупречный сервис.
            </p>
            <Button variant="outline-fill" className="w-full sm:w-auto" as="a" href="#booking">
              Консультация и запись
            </Button>
          </FadeInUp>
        </Container>
      }
    />
  )
}