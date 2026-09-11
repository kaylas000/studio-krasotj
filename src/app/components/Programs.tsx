import { Container } from '@/app/ui/Container'
import { FadeInUp } from '@/app/effects/FadeInUp'

// Sample data - in production this would come from CMS
interface Program {
  slug: string
  title: string
  effect: string
  brands: string[]
  price: string
  duration: string
}

const programsData: Program[] = [
  {
    slug: 'signature-lifting',
    title: 'Signature Lifting Valmont',
    effect: 'Мгновенное подтяжение, контурирование овала, глубокое увлажнение за счет клеточных комплексов Valmont.',
    brands: ['Valmont', 'Biologique Recherche', 'MBR'],
    price: 'от 28 000 ₽',
    duration: '90 мин',
  },
  {
    slug: 'hair-recovery',
    title: 'Восстановление волос Kérastase',
    effect: 'Восстановление структуры волос, окрашивание анализом прядки, indywidualная формула.',
    brands: ['Kérastase', 'Oribe', 'Shu Uemura Art of Hair'],
    price: 'от 18 000 ₽',
    duration: '120 мин',
  },
  {
    slug: 'makeup-ritual',
    title: 'Архитектура лица',
    effect: 'Макияж, который не маскирует, а выстраивает: работаем с анатомией лица, светом и гардеробом.',
    brands: ['Dior Backstage', 'Chanel Beauty', 'Tom Ford'],
    price: 'от 12 000 ₽',
    duration: '60 мин',
  },
]

export function Programs() {
  return (
    <section id="programs" className="section bg-white" aria-labelledby="programs-title">
      <Container size="display">
        <FadeInUp delay={0}>
          <span className="caption mb-phi2 block">Наши программы</span>
          <h2 id="programs-title" className="text-display-lg mb-phi5">Курируемые программы ухода</h2>
        </FadeInUp>

        <div className="grid gap-phi4 sm:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(3n+1)]:lg:col-span-2 [&>*:nth-child(3n+1)]:lg:row-span-2">
          {programsData.map((program) => (
            <article 
              key={program.slug} 
              className="group relative p-phi4 bg-surface/50 backdrop-blur-sm transition-all duration-500 hover:shadow-card min-h-[350px]"
            >
              <FadeInUp delay={(programsData.indexOf(program) * 0.1)}>
                <div className="flex flex-wrap gap-2 mb-phi3">
                  {program.brands.slice(0, 3).map((brand) => (
                    <span key={brand} className="caption text-accent/80 px-phi2 py-1 border border-hairline">
                      {brand}
                    </span>
                  ))}
                  {program.brands.length > 3 && (
                    <span className="caption text-text-muted/60">+{program.brands.length - 3}</span>
                  )}
                </div>

                <h3 className="text-display-md mb-phi2">{program.title}</h3>
                <p className="body text-text-muted mb-phi4">{program.effect}</p>
                
                <div className="flex items-baseline gap-phi2 text-primary font-body font-medium">
                  <span className="text-display-md">{program.price}</span>
                  <span className="text-body-sm text-text-muted">/ процедура</span>
                </div>
                
                <span className="absolute bottom-phi4 right-phi4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
                  →
                </span>
              </FadeInUp>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}