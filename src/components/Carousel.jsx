import { useRef, useState, useCallback, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Carousel({ children, className = "" }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByAmount = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(":scope > *");
    const step = card ? card.getBoundingClientRect().width + 24 : 360;
    return step;
  };

  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  };

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  };

  const arrowClass =
    "flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-sm";

  return (
    <div className={`relative max-w-5xl mx-auto ${className}`}>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canPrev}
        aria-label="Previous"
        className={`${arrowClass} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:flex z-10`}
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canNext}
        aria-label="Next"
        className={`${arrowClass} absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:flex z-10`}
      >
        <FiChevronRight size={22} />
      </button>
    </div>
  );
}