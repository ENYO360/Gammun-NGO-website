import { useState } from 'react'
import { programsData } from '../data/programsData'
import useScrollAnimation from '../hooks/useScrollAnimation'

function AnimSection({ children, className = '', delay = 0 }) {
  const { ref, visible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

function SectionLabel({ text }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-primaryGreen/10 text-primaryGreen text-xs font-semibold uppercase tracking-widest mb-3">
      {text}
    </span>
  )
}

function ImageCarousel({ images = [], captions = [], color = 'primaryGreen' }) {
  const [active, setActive] = useState(0)
  if (!images.length) return null
  return (
    <div className="relative h-64 lg:h-full min-h-[260px] overflow-hidden group">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={src} alt={captions[i] || ''} className="w-full h-full object-cover" />
          {captions[i] && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2">
              <p className="text-white text-xs leading-snug">{captions[i]}</p>
            </div>
          )}
        </div>
      ))}

      {/* Dot nav */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setActive((active - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => setActive((active + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

const categories = [
  'All',
  'Women & Youth Developments',
  'Prevention, Care & Support',
  'Protection & Health',
  'Disability Inclusive Development',
]

const colorMap = {
  primaryGreen: 'bg-primaryGreen',
  darkGreen:    'bg-darkGreen',
  primaryBlue:  'bg-primaryBlue',
  darkBlue:     'bg-darkBlue',
}
const textColorMap = {
  primaryGreen: 'text-primaryGreen',
  darkGreen:    'text-darkGreen',
  primaryBlue:  'text-primaryBlue',
  darkBlue:     'text-darkBlue',
}
const borderColorMap = {
  primaryGreen: 'border-primaryGreen',
  darkGreen:    'border-darkGreen',
  primaryBlue:  'border-primaryBlue',
  darkBlue:     'border-darkBlue',
}

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Sort newest first (IDs are YYYYMMDD)
  const sorted = [...programsData].sort((a, b) => b.id - a.id)
  const filtered = activeCategory === 'All'
    ? sorted
    : sorted.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-16 lg:pt-20">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-darkGreen to-primaryBlue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <SectionLabel text="Our Work" />
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Programs & Initiatives</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              From community health campaigns to disability rights advocacy, each program is rooted
              in evidence, co-designed with communities, and built to last.
            </p>
          </AnimSection>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primaryGreen text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Programs List */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20">No programs found in this category.</p>
          )}

          {filtered.map((program, i) => (
            <AnimSection key={program.id} delay={Math.min(i * 60, 300)}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-5">

                  {/* Image carousel */}
                  <div className="lg:col-span-2 relative">
                    <ImageCarousel
                      images={program.images ?? (program.image ? [program.image] : [])}
                      captions={program.captions ?? []}
                      color={program.color}
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${colorMap[program.color]} shadow-sm`}>
                        {program.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs text-gray-400 font-medium">{program.year}</span>
                        <span className={`text-xs font-semibold ${textColorMap[program.color]} ${borderColorMap[program.color]} border px-3 py-0.5 rounded-full`}>
                          {program.impact}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {program.title}
                      </h2>
                      <p className="text-gray-600 mb-5 leading-relaxed">{program.summary}</p>

                      <div className="space-y-2">
                        {program.details.map((d, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colorMap[program.color]}`} />
                            <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-darkGreen text-white py-16 text-center">
        <AnimSection>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Help Fund These Programs</h2>
            <p className="text-white/75 mb-8">
              Your support ensures we can continue delivering life-changing programs to the
              communities that need them most.
            </p>
            <a
              href="/support"
              className="inline-block px-10 py-4 bg-primaryGreen text-white font-semibold rounded-full hover:bg-white hover:text-darkGreen transition-colors shadow-lg"
            >
              Partner With Us
            </a>
          </div>
        </AnimSection>
      </div>

    </div>
  )
}