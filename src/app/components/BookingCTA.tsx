import { Container } from '@/app/ui/Container'
import { FadeInUp } from '@/app/effects/FadeInUp'
import { Button } from '@/app/ui/Button'

export function BookingCTA({ id }: { id: string }) {
  return (
    <section id={id} className="section bg-anthracite text-cream relative overflow-hidden" aria-labelledby="booking-title">
      {/* Декоративный элемент */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-phi6 bg-accent/50" aria-hidden="true" />
      
      <Container size="content">
        <FadeInUp className="text-center max-w-2xl mx-auto">
          <span className="caption mb-phi2 block">Запись</span>
          <h2 id="booking-title" className="text-display-lg mb-phi3">Готовы к трансформации?</h2>
          <p className="lead text-cream/70 mb-phi6">
            Забронируйте консультацию, чтобы подобрать идеальную программу. 
            Наш консьерж свяжется с вами в течение 15 минут.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-phi3 justify-center items-center">
            <Button variant="outline-fill" className="w-full sm:w-auto" as="a" href="/booking">
              Забронировать время
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto text-cream hover:text-accent border-hairline border-cream/40" as="a" href="tel:+74950000000">
              Позвонить: +7 (495) 000-00-00
            </Button>
          </div>
        </FadeInUp>
      </Container>
    </section>
  )
}