import './embla.css';

import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, NextButton, PrevButton } from '@/components/Projects/EmblaCarousel/Button';
import { useDotButton } from '@/hooks/useDotButton';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

type EmblaCarouselProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

export function EmblaCarousel({ slides, options }: Readonly<EmblaCarouselProps>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>{index + 1}</div>
            </div>
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
