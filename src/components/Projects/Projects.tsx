import { EmblaOptionsType } from 'embla-carousel';

import { EmblaCarousel } from '@/components/Projects/EmblaCarousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = Array.from(Array(5).keys());

export function Projects() {
  return (
    <section className=''>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
