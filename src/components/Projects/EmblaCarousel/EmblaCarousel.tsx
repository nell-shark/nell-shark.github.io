import './embla.css';

import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, NextButton, PrevButton } from '@/components/Projects/EmblaCarousel/Button';
import { EmblaSlide } from '@/components/Projects/EmblaCarousel/EmblaSlide';
import { useDotButton } from '@/hooks/useDotButton';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

const slides = [
  { title: 'Develop', description: 'In progress', href: '' },
  {
    title: '#2024660800',
    description: 'Calculation of the temperature of overhead line wires',
    href: 'https://fips.ru/publication-web/publications/document?type=doc&tab=PrEVM&id=F5C41A74-7E18-4773-B694-66DCF4F0CA0F'
  },
  { title: 'Portfolio', description: 'A personal portfolio website', href: 'https://krivolapovva.ru' },
  {
    title: '#2024687736',
    description: 'Calculation of annual energy losses of overhead line wires',
    href: 'https://fips.ru/publication-web/publications/document?type=doc&tab=PrEVM&id=1198E223-A103-44C1-B210-F5892662482D'
  },
  {
    title: 'Codewars',
    description: 'Codewars statistics',
    href: 'https://www.codewars.com/users/nell-shark'
  },

  {
    title: '#2023660295',
    description: 'Calculation of long-term permissible currents of overhead wires',
    href: 'https://fips.ru/publication-web/publications/document?type=doc&tab=PrEVM&id=FCFF4268-E92B-4B60-958F-8449B37DFD5C'
  }
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='mb-8 w-full text-center'>
        <h2 className='text-5xl font-bold text-white'>
          echo <span className='text-yellow-300'>$PROJECTS</span>
        </h2>
      </div>

      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map(slide => (
            <EmblaSlide key={slide.href} {...slide} />
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
