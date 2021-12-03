import useEmblaCarousel from 'embla-carousel-react';
import * as React from 'react';

import { Thumb } from './Thumb';
import NextImage from '../NextImage';

const CarouselWithThumbnail = ({ images }: { images: string[] }) => {
  const slides = Array.from(Array(images.length).keys());
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = React.useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = React.useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  React.useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className='relative border-2 border-primary-900 shadow-sm'>
        <div className='overflow-hidden w-full' ref={mainViewportRef}>
          <div className='embla__container'>
            {slides.map((index) => (
              <div className='relative min-w-full' key={index}>
                <div className='overflow-hidden relative h-full'>
                  <NextImage
                    priority
                    className='w-full'
                    src={images[index]}
                    alt='achievement'
                    width={602}
                    height={752}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative mt-1 w-full border-2 border-primary-900'>
        <div className='overflow-hidden' ref={thumbViewportRef}>
          <div className='embla__container cursor-default'>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={images[index]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselWithThumbnail;
