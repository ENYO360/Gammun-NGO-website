import { useState, useRef, useCallback, useEffect } from "react";
import HeroImg1 from "../assets/heroImg-1.jpg";
import HeroImg2 from "../assets/heroImg-2.jpg";
import HeroImg3 from "../assets/heroImg-3.jpg";
import HeroImg4 from "../assets/heroImg-4.jpg";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO SLIDES — Edit titles, descriptions, tags, and image paths here.
//  Place your images inside src/assets/ and update the paths below.
// ─────────────────────────────────────────────────────────────────────────────
const slides = [
  {
    title: "Building Malaria-Free Communities",
    tag: "Health & Prevention",
    desc: "Empowering communities through engagement and awareness to create a healthier, malaria-free society.",
    image: HeroImg1,
    alt: "Building Malaria-Free Communities",
  },
  {
    title: "Empowering Persons with Disabilities",
    tag: "Disability Inclusion",
    desc: "Providing assistive devices that enhance mobility, independence, and inclusion for persons with disabilities in Northeast Nigeria.",
    image: HeroImg2,
    alt: "Empowering Persons with Disabilities",
  },
  {
    title: "Empowering Tomorrow's Health Champions",
    tag: "Youth Development",
    desc: "Celebrating the graduation of trained Peer Educators, equipped to promote positive health outcomes within their communities.",
    image: HeroImg3,
    alt: "Empowering Tomorrow's Health Champions",
  },
  {
    title: "Promoting Health, Transforming Lives",
    tag: "Community Impact",
    desc: "Driving community health awareness through impactful sensitization campaigns — because saving lives is our passion.",
    image: HeroImg4,
    alt: "Promoting Health, Transforming Lives",
  },
];

// ─── To use your own local images instead of the URLs above:
//  1. Place images in src/assets/ (e.g. heroImg-1.jpg)
//  2. Import them at the top of this file:
//       import HeroImg1 from "../assets/heroImg-1.jpg"
//  3. Replace the `image:` values above with the imported variables.

const DURATION = 5000;
const CIRCUMFERENCE = 94.25;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const startTimeRef = useRef(null);
  const rafRef = useRef(null);
  const touchStartRef = useRef(null);
  const pausedProgressRef = useRef(0);

  const goTo = useCallback((index) => {
    const next = ((index % slides.length) + slides.length) % slides.length;
    setContentVisible(false);
    setAnimating(false);

    setTimeout(() => {
      setCurrent(next);
      setAnimating(true);
      setProgress(0);
      setContentVisible(true);
      startTimeRef.current = performance.now();
      pausedProgressRef.current = 0;
    }, 80);
  }, []);

  const currentRef = useRef(current);
  useEffect(() => { currentRef.current = current; }, [current]);

  const tick = useCallback(() => {
    rafRef.current = requestAnimationFrame((now) => {
      const elapsed = now - startTimeRef.current;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p < 1) {
        tick();
      } else {
        goTo(currentRef.current + 1);
      }
    });
  }, [goTo]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    if (!paused) tick();
    return () => cancelAnimationFrame(rafRef.current);
  }, [current, paused, tick]);

  const handlePause = () => {
    setPaused(true);
    pausedProgressRef.current = progress;
    cancelAnimationFrame(rafRef.current);
  };

  const handleResume = () => {
    setPaused(false);
    startTimeRef.current = performance.now() - pausedProgressRef.current * DURATION;
    tick();
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
  };

  const strokeOffset = CIRCUMFERENCE * (1 - progress);
  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[520px] md:h-[680px] overflow-hidden bg-black"
      aria-label="Image carousel"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={s.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out ${
              i === current && animating ? "scale-100" : "scale-105"
            }`}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Slide counter */}
      <div className="absolute top-5 left-6 z-20 text-xs font-medium tracking-widest text-white/50 select-none">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Progress ring */}
      <div className="absolute top-4 right-5 z-20">
        <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          <circle
            cx="18" cy="18" r="15"
            fill="none"
            stroke="#86efac"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeOffset}
            style={{
              transformOrigin: "center",
              transform: "rotate(-90deg)",
              transition: "stroke-dashoffset 0.1s linear",
            }}
          />
        </svg>
      </div>

      {/* Slide content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-8 md:px-10 md:pb-10">
        <div
          className={`transition-all duration-500 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Tag */}
          <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald-300 bg-emerald-300/15 border border-emerald-300/35 px-3 py-1 rounded-full mb-3">
            {slide.tag}
          </span>

          {/* Title */}
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-2 max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
            {slide.desc}
          </p>
        </div>
      </div>

      {/* Arrow buttons — hidden on mobile */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Nav dots */}
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === current ? "w-11 bg-emerald-400" : "w-7 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
