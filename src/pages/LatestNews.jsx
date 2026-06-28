import { useState } from 'react'
import { newsData } from '../data/newsData'
import useScrollAnimation from '../hooks/useScrollAnimation'

function AnimSection({ children, delay = 0 }) {
  const { ref, visible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
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

export default function LatestNews() {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-darkBlue to-primaryBlue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <SectionLabel text="Stay Informed" />
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Latest News</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Stories of impact, program updates, and community voices from across Gammun's work.
            </p>
          </AnimSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 2-col on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {newsData.map((item, i) => {
            const isOpen = openId === item.id

            return (
              <AnimSection key={item.id} delay={i * 60}>
                <div
                  onClick={() => handleToggle(item.id)}
                  className={`cursor-pointer rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen
                      ? 'border-primaryGreen shadow-md'
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-sm bg-white'
                    }`}
                >
                  {/* Thumbnail */}
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Card header */}
                  <div className="p-5 bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isOpen ? 'bg-primaryGreen/10 text-primaryGreen' : 'bg-gray-100 text-gray-500'
                          }`}>
                          {item.category}
                        </span>
                        <h3 className={`mt-2 text-sm font-semibold leading-snug ${isOpen ? 'text-darkGreen' : 'text-gray-800'
                          }`}>
                          {item.headline}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{item.date} · {item.time}</p>
                      </div>
                      {/* Chevron */}
                      <svg
                        className={`w-4 h-4 mt-1 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primaryGreen' : ''
                          }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable body */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out bg-white border-t border-gray-100 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
                      }`}
                  >
                    <div className="px-5 pb-6 pt-4 space-y-4 max-h-[400px] overflow-y-auto">
                      {item.body.map((para, j) => (
                        <p key={j} className="text-gray-600 leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                        <p className="text-xs text-gray-400">
                          By <span className="text-darkGreen font-medium">Gammun Communications Team</span>
                        </p>
                        <div className="flex gap-2">
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="px-3 py-1 text-xs font-semibold border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-500"
                            >
                              Share
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}