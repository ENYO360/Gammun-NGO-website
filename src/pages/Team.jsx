import { useState } from 'react'
import { teamData } from '../data/teamData'
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
    <span className="inline-block px-4 py-1.5 rounded-full bg-primaryBlue/50 text-darkGreen text-xs font-semibold uppercase tracking-widest mb-3">
      {text}
    </span>
  )
}

export default function Team() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-darkGreen via-primaryGreen to-primaryBlue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <SectionLabel text="The People Behind the Mission" />
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Our Team</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Dedicated professionals bringing diverse expertise, shared values, and deep community commitment to every program we run.
            </p>
          </AnimSection>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamData.map((member, i) => (
              <AnimSection key={member.id} delay={i * 60}>
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer"
                  onMouseEnter={() => setHovered(member.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-darkGreen/80 via-transparent transition-opacity duration-300 ${hovered === member.id ? 'opacity-100' : 'opacity-0'}`} />
                    {/* Bio on hover */}
                    <div className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 ${hovered === member.id ? 'opacity-100' : 'opacity-0'}`}>
                      <p className="text-white text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                    <p className="text-darkBlue text-sm font-medium mt-0.5">{member.portfolio}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primaryGreen transition-colors group/link"
                    >
                      <span className="group-hover/link:underline">{member.email}</span>
                    </a>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection>
            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm">Hover over a card to read the team member's biography.</p>
            </div>
          </AnimSection>
        </div>
      </div>

      {/* Values strip */}
      <div className="bg-darkGreen text-white py-14">
        <AnimSection>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">We Need Volunteers</h2>
            <p className="text-white/75 mb-6 leading-relaxed">
              We're always looking for passionate, skilled individuals committed to making a difference. Explore current openings or send us a speculative application.
            </p>
            <a
              href="mailto:careers@gammun.org"
              className="inline-block px-8 py-3 bg-primaryGreen text-white font-semibold rounded-full hover:bg-white hover:text-darkGreen transition-colors shadow-md"
            >
              gammunorg@gmail.com
            </a>
          </div>
        </AnimSection>
      </div>
    </div>
  )
}
