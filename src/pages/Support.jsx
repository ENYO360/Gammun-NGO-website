import { useState } from 'react'
import { supportTilesData, contactMethodsData, partnerLogos } from '../data/supportData'
import useScrollAnimation from '../hooks/useScrollAnimation'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function AnimSection({ children, delay = 0, direction = 'up' }) {
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
      className={`transition-all duration-700 ${visible ? 'translate-x-0 translate-y-0 opacity-100' : anim}`}
    >
      {children}
    </div>
  )
}

function SectionLabel({ text, light = false }) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${light ? 'bg-white/20 text-white' : 'bg-primaryGreen/10 text-primaryGreen'}`}>
      {text}
    </span>
  )
}

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', type: 'donation', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-darkGreen to-darkBlue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primaryGreen blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primaryBlue blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <SectionLabel text="Get Involved" light />
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Support Gammun</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Every donation, partnership, and act of support moves us closer to a world where every person can live with dignity, access opportunity, and thrive in safety.
            </p>
          </AnimSection>
        </div>
      </div>

      {/* Four Picture Tiles */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <SectionLabel text="Why Support Us" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Your Support Creates Real Change</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Here's what your generosity helps us do:</p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {supportTilesData.map((tile, i) => (
              <AnimSection key={tile.id} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-80">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-3xl mb-3 block">{tile.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{tile.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <SectionLabel text="Get In Touch" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Ways to Connect & Support</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Whether you want to donate, partner, or simply learn more -- we're here.</p>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethodsData.map((contact, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primaryGreen/10 flex items-center justify-center text-2xl mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{contact.method}</h3>
                  <ul className="space-y-1.5">
                    {contact.details.map((d, j) => (
                      <li key={j} className="text-sm text-gray-500">{d}</li>
                    ))}
                  </ul>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimSection>
            <div className="text-center mb-10">
              <SectionLabel text="Partnership Enquiry" />
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Send Us a Message</h2>
            </div>
          </AnimSection>

          {sent ? (
            <AnimSection>
              <div className="bg-primaryGreen/10 border border-primaryGreen rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-darkGreen mb-2">Message Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. A member of our partnerships team will respond within 2 business days.</p>
              </div>
            </AnimSection>
          ) : (
            <AnimSection delay={100}>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-5 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryGreen bg-white text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryGreen bg-white text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Type of Support</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryGreen bg-white text-sm"
                  >
                    <option value="donation">Financial Donation</option>
                    <option value="partnership">Organizational Partnership</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="inkind">In-Kind Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryGreen bg-white text-sm resize-none"
                    placeholder="Tell us how you'd like to support Gammun's mission..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primaryGreen text-white font-bold rounded-xl hover:bg-darkGreen transition-colors shadow-md text-base"
                >
                  Send Message
                </button>
              </form>
            </AnimSection>
          )}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimSection>
            <SectionLabel text="Stay Connected" />
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Follow GAMMUN
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Join our online community to stay updated on our programs, impact
              stories, community outreach, and opportunities to support our mission.
            </p>

            <div className="flex justify-center flex-wrap gap-5 mt-10">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-primaryGreen hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-primaryGreen"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-primaryGreen hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-primaryGreen"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-primaryGreen hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-primaryGreen"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-primaryGreen hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-primaryGreen"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-primaryGreen hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-primaryGreen"
              >
                <FaWhatsapp />
              </a>
            </div>
          </AnimSection>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-gray-900 py-14">
        <AnimSection>
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-8">Trusted by Leading Organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {partnerLogos.map((partner, i) => (
                <div key={i} className="px-6 py-3 rounded-xl border border-gray-700 text-gray-400 font-semibold text-sm hover:border-primaryGreen hover:text-primaryGreen transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </div>
  )
}
