
'use client'
import { useState } from 'react'
import { Menu, X, Crown, Music } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Crown className="h-8 w-8 text-gold-500" />
              <Music className="h-4 w-4 text-primary-600 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-display font-bold text-white">
              Royalty Records
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </a>
            <button className="bg-gold-500 text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gold-400 transition-colors">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">
                Features
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                Contact
              </a>
              <button className="bg-gold-500 text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gold-400 transition-colors w-fit">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
