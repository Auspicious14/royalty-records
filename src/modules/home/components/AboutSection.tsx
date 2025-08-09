'use client'
import { SAMPLE_ABOUT } from "@/utils/sampleData.ts";

export default function AboutSection() {

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-royal-dark/90 to-royal-purple/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            About
          </h2>
          
          <div className="glass-effect p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              {SAMPLE_ABOUT.content}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  {SAMPLE_ABOUT.mission}
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  {SAMPLE_ABOUT.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
