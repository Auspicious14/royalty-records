'use client'
import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function ContactSection() {
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
  }

  const CONTACT_INFO = {
    email: "cocohen@gmail.com",
    phone:'27694636',
    socialMedia: {
      facebook: "#",
      instagram:"#",
      twitter:"#",
      youtube:"#"
    }
  }
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-royal-purple/90 to-royal-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16 animate-slide-up">
          Contact
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-royal-dark" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-white font-semibold hover:text-gold-400 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-royal-dark" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-white font-semibold hover:text-gold-400 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h4 className="font-display text-xl font-bold text-white mb-6">Follow Us</h4>
                  <div className="flex space-x-4">
                    {Object.entries(CONTACT_INFO.socialMedia).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons]
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-royal-dark transition-all duration-300 text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-8">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full gold-button text-royal-dark py-3 px-6 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
