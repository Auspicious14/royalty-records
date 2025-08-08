import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'No upfront costs',
  'Keep 100% of your rights',
  'Global distribution',
  'Monthly payouts',
  'Advanced analytics',
  '24/7 support'
]

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-royal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to Take Your
            <span className="text-gradient block">Music Global?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of artists who trust Royalty Records with their music distribution and royalty management.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gold-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Join in under 5 minutes • No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
