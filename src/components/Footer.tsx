import { Crown, Music, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Product: [
    'Features',
    'Pricing',
    'Analytics',
    'Distribution',
    'API',
  ],
  Company: [
    'About',
    'Careers',
    'Press',
    'News',
    'Contact',
  ],
  Resources: [
    'Blog',
    'Help Center',
    'Guides',
    'Webinars',
    'Community',
  ],
  Legal: [
    'Terms',
    'Privacy',
    'Cookies',
    'Licenses',
    'Security',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Crown className="h-8 w-8 text-gold-500" />
                <Music className="h-4 w-4 text-primary-600 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-2xl font-display font-bold">
                Royalty Records
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              The premier platform for music distribution and royalty management, 
              empowering artists worldwide to reach global audiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@royaltyrecords.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Royalty Records. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
