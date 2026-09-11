import { Container } from '@/app/ui/Container'
import { FadeInUp } from '@/app/effects/FadeInUp'
import Image from 'next/image'

interface Master {
  slug: string
  name: string
  specialization: string
  bio: string
  certifications: string[]
  photo: string
}

const teamData: Master[] = [
  {
    slug: 'anna-ivanova',
    name: 'Анна Иванова',
    specialization: 'Топ-эксперт по инъекционным техникам',
    bio: '15 лет опыта. Международный тренер Allergan. Автор методики "Natural Contour".',
    certifications: ['Allergan Trainer', 'ESAS Member', 'PhD Dermatology'],
    photo: '/images/team/anna.avif',
  },
  {
    slug: 'marina-sokolova',
    name: 'Мarina Соколова',
    specialization: 'Ведущий косметолог',
    bio: 'Медицинское образование, сертификация Valmont и La Mer. Воссоздание кожи после стресса и процедур.',
    certifications: ['Valmont Method Certified', 'La Mer Global'],
    photo: '/images/team/marina.avif',
  },
  {
    slug: 'darya-kim',
    name: 'Дарья Ким',
    specialization: 'Визажист · артист по бровям',
    bio: 'Работала backstage на неделях моды в Париже и Милане. Авторский курс по цвету.',
    certifications: ['Dior Backstage Pro', 'Milan Fashion Week'],
    photo: '/images/team/darya.avif',
  },
]

export function Team() {
  return (
    <section id="team" className="section bg-cream/50" aria-labelledby="team-title">
      <Container size="display">
        <FadeInUp>
          <span className="caption mb-phi2 block">Эксперты</span>
          <h2 id="team-title" className="text-display-lg mb-phi5">Мастера международного уровня</h2>
        </FadeInUp>

        <div className="grid gap-phi4 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((master) => (
            <article key={master.slug} className="group">
              <FadeInUp delay={teamData.indexOf(master) * 0.1} className="space-y-phi3">
                <div className="relative aspect-[3/4] overflow-hidden bg-anthracite/10">
                  <Image
                    src={master.photo}
                    alt={master.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="text-display-sm">{master.name}</h3>
                  <p className="caption text-accent">{master.specialization}</p>
                  <p className="body-sm text-text-muted mt-phi2">{master.bio}</p>
                  <ul className="flex flex-wrap gap-2 mt-phi2" aria-label="Сертификаты">
                    {master.certifications.map((cert) => (
                      <li key={cert} className="caption text-text-muted/60 border border-hairline px-phi2 py-1">{cert}</li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}