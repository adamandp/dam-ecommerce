"use client";

import { ReactNode, CSSProperties } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "@/hooks/use-dot-button";

type PropType = {
  children: ReactNode;
  options?: {
    loop?: boolean;
  };
  spacing?: number;
  size?: number;
  visibleSlides?: number;
  paddingSlide?: string;
};

const Carousel = ({
  children,
  options,
  spacing = 20,
  size = 300,
  visibleSlides = 5,
  paddingSlide,
}: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const slideSpacing = `clamp(calc(${spacing}px * 0.7), calc(${spacing}/ 1920 * 100vw), ${spacing}px)`;
  const slideSize = `clamp(calc(${size}px * 0.7), calc(${size} / 1920 * 100vw), ${size}px)`;

  return (
    <div className={`grid place-items-center`}>
      <div
        className="carousel-container carousel-width overflow-hidden"
        style={
          {
            "--slide-spacing": slideSpacing,
            "--slide-size": slideSize,
            "--visible-slides": visibleSlides,
          } as CSSProperties
        }
      >
        <div className={`carousel-slide ${paddingSlide}`} ref={emblaRef}>
          <div className="flex" style={{}}>
            {children}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-c-3 mt-c-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`rounded-full cursor-pointer ${
              index === selectedIndex
                ? "bg-pink-500 size-c-5"
                : "bg-gray-300 size-c-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
