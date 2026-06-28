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
  const [selected, setSelected] = useState(newsData[0])

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar: news list */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">All Stories</h2>
            {newsData.map((item, i) => (
              <AnimSection key={item.id} delay={i * 60}>
                <button
                  onClick={() => setSelected(item)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                    selected.id === item.id
                      ? 'bg-primaryGreen/5 border-primaryGreen shadow-sm'
                      : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img src={item.image} alt={item.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selected.id === item.id ? 'bg-primaryGreen/10 text-primaryGreen' : 'bg-gray-100 text-gray-500'}`}>
                    {item.category}
                  </span>
                  <h3 className={`mt-2 text-sm font-semibold leading-snug ${selected.id === item.id ? 'text-darkGreen' : 'text-gray-800'}`}>
                    {item.headline}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.date} · {item.time}</p>
                </button>
              </AnimSection>
            ))}
          </div>

          {/* Main article */}
          <div className="lg:col-span-2">
            <AnimSection key={selected.id}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Hero image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.headline}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span className="bg-primaryGreen/10 text-primaryGreen text-xs font-semibold px-3 py-1 rounded-full">
                      {selected.category}
                    </span>
                    <span className="text-xs text-gray-400">{selected.date}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{selected.time}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                    {selected.headline}
                  </h1>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-primaryGreen rounded-full mb-6" />

                  {/* Body paragraphs */}
                  <div className="space-y-5">
                    {selected.body.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-base">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-sm text-gray-400">Published by <span className="text-darkGreen font-medium">Gammun Communications Team</span></p>
                    <div className="flex gap-2">
                      {['Share', 'Bookmark'].map((a) => (
                        <button key={a} className="px-4 py-2 text-xs font-semibold border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-500">
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </div>
    </div>
  )
}
