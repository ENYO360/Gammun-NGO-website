import { Link } from 'react-router-dom'
import { aboutData, visionMissionData, coreValuesData, thematicAreasData } from '../data/homeData'
import useScrollAnimation from '../hooks/useScrollAnimation'
import Hero from '../components/Hero'

// ─── Animated section wrapper ───────────────────────────────
function AnimSection({ children, className = '', direction = 'up', delay = 0 }) {
  const { ref, visible } = useScrollAnimation()
  const anim = {
    up: 'translate-y-8 opacity-0',
    left: '-translate-x-8 opacity-0',
    right: 'translate-x-8 opacity-0',
  }[direction]
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'translate-x-0 translate-y-0 opacity-100' : anim} ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Section label ───────────────────────────────────────────
function SectionLabel({ text }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-primaryGreen/10 text-primaryGreen text-xs font-semibold uppercase tracking-widest mb-3">
      {text}
    </span>
  )
}

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Hero />

      {/* ── Section 1: About ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <AnimSection direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutData.image}
                    alt={aboutData.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-6 -right-6 bg-primaryGreen text-white rounded-2xl px-6 py-4 shadow-xl">
                  <p className="text-3xl font-bold">{aboutData.stats[0].value}</p>
                  <p className="text-sm font-medium text-white/85">{aboutData.stats[0].label}</p>
                </div>
              </div>
            </AnimSection>

            {/* Text */}
            <AnimSection direction="right">
              <SectionLabel text={aboutData.subtitle} />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">{aboutData.title}</h2>
              <div className="space-y-4">
                {aboutData.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {aboutData.stats.slice(1).map((s, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-2xl font-bold text-primaryGreen">{s.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/programs" className="inline-block mt-8 px-8 py-3 bg-primaryGreen text-white rounded-full font-semibold hover:bg-darkGreen transition-colors shadow-md">
                Explore Our Work →
              </Link>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── Section 2: Vision & Mission ─────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-darkGreen to-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <SectionLabel text="Purpose & Direction" />
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">Vision & Mission</h2>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[visionMissionData.vision, visionMissionData.mission].map((item, i) => (
              <AnimSection key={i} delay={i * 150}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 text-2xl">
                    {i === 0 ? '🔭' : '🎯'}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.text}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Core Values ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <SectionLabel text="What We Stand For" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">The principles that guide every decision, program, and partnership we make.</p>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValuesData.map((v, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Thematic Areas ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <SectionLabel text="What We Do" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Thematic Areas</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Four interconnected pillars of programming that together create lasting community transformation.</p>
            </div>
          </AnimSection>

          <div className="space-y-16">
            {thematicAreasData.map((area, i) => (
              <AnimSection key={area.id} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text side */}
                  <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${area.accent}`}>
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      Thematic Area {area.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-primaryGreen font-semibold text-sm shrink-0">Goal:</span>
                      <p className="text-gray-700 text-sm font-medium italic">{area.goal}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    <Link
                      to="/programs"
                      className="inline-block mt-6 text-primaryGreen font-semibold text-sm hover:text-darkGreen transition-colors"
                    >
                      Learn more about this program →
                    </Link>
                  </div>

                  {/* Images side */}
                  <div className={`grid grid-cols-2 gap-3 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    {area.images.map((img, j) => (
                      <div
                        key={j}
                        className={`rounded-xl overflow-hidden shadow-md ${j === 0 ? 'aspect-square' : 'aspect-[3/4] mt-6'}`}
                      >
                        <img
                          src={img}
                          alt={`${area.title} ${j + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────────── */}
      <section className="bg-primaryBlue py-16">
        <AnimSection>
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Us in Creating Change</h2>
            <p className="text-white/80 mb-8 text-lg">Whether you donate, volunteer, or partner with us -- your contribution makes a real difference.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support" className="px-8 py-4 bg-white text-darkGreen font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Support Our Mission
              </Link>
              <Link to="/programs" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                View All Programs
              </Link>
            </div>
          </div>
        </AnimSection>
      </section>
    </div>
  )
}
