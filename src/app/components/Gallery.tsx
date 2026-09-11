import { Container } from '@/app/ui/Container'
import { FadeInUp } from '@/app/effects/FadeInUp'
import Image from 'next/image'

interface GalleryItem {
  id: string
  title: string
  category: string
  before: string
  after: string
}

const galleryData: GalleryItem[] = [
  { id: '1', title: 'Коррекция овала лица', category: 'Инъекционная косметология', before: '/images/gallery/1-before.avif', after: '/images/gallery/1-after.avif' },
  { id: '2', title: 'Архитектура бровей', category: 'Визаж', before: '/images/gallery/2-before.avif', after: '/images/gallery/2-after.avif' },
  { id: '3', title: 'СпА-процедура', category: 'Косметология', before: '/images/gallery/3-before.avif', after: '/images/gallery/3-after.avif' },
  { id: '4', title: 'Прическа свободных волос', category: 'Укладка', before: '/images/gallery/4-before.avif', after: '/images/gallery/4-after.avif' },
]

export function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <Container size="full">
        <FadeInUp>
          <div className="max-w-display mx-auto text-center mb-phi5">
            <span className="caption mb-phi2 block">Работы мастеров</span>
            <h2 id="gallery-title" className="text-display-lg">Результат, который говорит сам за себя</h2>
          </div>
        </FadeInUp>

        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {galleryData.map((item) => (
            <FadeInUp key={item.id} delay={galleryData.indexOf(item) * 0.08}>
              <figure className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={item.after}
                  alt={`${item.title} — результат процедуры`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-phi4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full text-cream">
                    <p className="caption text-accent">{item.category}</p>
                    <h4 className="text-display-sm">{item.title}</h4>
                  </div>
                </figcaption>
              </figure>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  )
}