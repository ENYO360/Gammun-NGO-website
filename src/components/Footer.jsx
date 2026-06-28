import { Link } from 'react-router-dom'
import { FaHeart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Logo from './../assets/gammun-logo.png';

export default function Footer() {
  const socials = [
    { icon: FaFacebook, href: "https://web.facebook.com/gammunorg" },
    { icon: FaXTwitter, href: "https://x.com/GammunNgo?s=20" },
    { icon: FaInstagram, href: "https://www.instagram.com/gammunngo?fbclid=IwY2xjawSsxiZleHRuA2FlbQIxMABicmlkETJyS1FvZ1I3WTVMOXYwV2ZZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtDcbSrk5POmNbJWdzwS3Da1zN1MlSSk9tJFyc6T5y3aocwS8sFOrZC2MpT9_aem_OjmlMHZYapW1yLx7uK6Edw" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/gammun-centre-for-care-and-development-nigeria-gccdn-6004a3405/" },
    { icon: FaWhatsapp, href: "https://wa.me/2347032467191" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="GAMMUN Logo" className="w-16 h-16 rounded-full shadow-md" />
              <span className="text-white font-bold text-xl">GAMMUN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs pb-4">
              Committed to building resilient communities through inclusive development, health, and human rights advocacy across Nigeria and beyond.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primaryBlue transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Programs', path: '/programs' },
                { label: 'Latest News', path: '/news' },
                { label: 'Our Team', path: '/team' },
                { label: 'Board of Trustees', path: '/board' },
                { label: 'Support Us', path: '/support' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-400 hover:text-primaryBlue text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */} 
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-primaryGreen mt-0.5">📍</span>
                <span>1. Opposite Ministry of Works, Keffi Road, Akwanga, Akwanga LGA, Nasarawa State.
                <p>2. No. 2 Guda Abdullahi Road, Farm Centre, Kano, Nigeria</p></span>
              </li>
              <li className="flex gap-2">
                <span className="text-primaryGreen">📞</span>
                <a href="tel:+2347032467191" className="hover:text-primaryBlue transition-colors">+234 703 246 7191</a>
              </li>
              <li className="flex gap-2">
                <span className="text-primaryGreen">✉️</span>
                <a href="mailto:gammunorg@gmail.com" className="hover:text-primaryBlue transition-colors">gammunorg@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Gammun NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
