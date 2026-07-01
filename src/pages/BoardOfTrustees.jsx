import { boardData } from '../data/boardData'
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

const roleColors = {
  'Board Chairman': 'bg-primaryGreen text-white',
  'Board Secretary': 'bg-darkBlue text-white',
  'Staff Representative': 'bg-gray-100 text-gray-700',
}

export default function BoardOfTrustees() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-darkBlue to-darkGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <SectionLabel text="Governance & Leadership" />
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Board of Trustees</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Gammun's Board of Trustees provides strategic direction, oversight, and fiduciary accountability -- ensuring the organization remains true to its mission and values.
            </p>
          </AnimSection>
        </div>
      </div>

      {/* Intro note */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <p className="text-gray-500 text-base leading-relaxed">
              The Board of Trustees is composed of eminent professionals from health, law, finance, policy, and civil society who volunteer their time and expertise to guide Gammun's strategic vision and ensure responsible stewardship of all resources.
            </p>
          </AnimSection>
        </div>
      </div>

      {/* Board Members */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured: Chair & Vice Chair */}
          <AnimSection>
            <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-8">Leadership</h2>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {boardData.filter(m => ['Board Chairman', 'Board Secretary', 'Staff Representative'].includes(m.title)).map((member, i) => (
              <AnimSection key={member.id} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-44 h-52 sm:h-auto shrink-0 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${roleColors[member.title]}`}>
                      {member.title}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{member.affiliation}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Other members */}
          <AnimSection>
            <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-8">Officers & Trustees</h2>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardData.filter(m => !['Board Chairman', 'Board Secretary', 'Staff Representative'].includes(m.title)).map((member, i) => (
              <AnimSection key={member.id} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${roleColors[member.title] || roleColors['Trustee']}`}>
                      {member.title}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-3">{member.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{member.affiliation}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </div>

      {/* Governance note */}
      <div className="bg-darkBlue text-white py-16">
        <AnimSection>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Committed to Good Governance</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              Gammun adheres to the highest standards of nonprofit governance, transparency, and accountability.
            </p>
          </div>
        </AnimSection>
      </div>
    </div>
  )
}
