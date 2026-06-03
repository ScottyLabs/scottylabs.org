import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { CarouselPhoto } from "../../data/history";
import css from "./carousel.module.css";

const HISTORY_ASSETS_BASE_URL =
  "https://assets.scottylabs.org/team-page/history/";

export const HistoryCarousel: React.FC<{ photos: CarouselPhoto[] }> = ({
  photos,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={css.root}>
      <div className={css.viewport} ref={emblaRef}>
        <div className={css.container}>
          {photos.map((photo) => (
            <div key={photo.filename} className={css.slide}>
              <img
                src={`${HISTORY_ASSETS_BASE_URL}${photo.filename}`}
                alt={photo.caption ?? ""}
                className={css.image}
                loading="lazy"
                decoding="async"
              />
              {photo.caption ? (
                <div className={css.caption}>{photo.caption}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={`${css.button} ${css.prev}`}
        onClick={scrollPrev}
        disabled={!canPrev}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        className={`${css.button} ${css.next}`}
        onClick={scrollNext}
        disabled={!canNext}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
