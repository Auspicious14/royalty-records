import { Shield, BarChart3, Globe, Zap, DollarSign, Music } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Get your music on Spotify, Apple Music, Amazon Music, and 150+ digital stores worldwide.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Detailed insights into your streams, earnings, and audience demographics in real-time.',
  },
  {
    icon: DollarSign,
    title: 'Fast Payouts',
    description: 'Receive your royalties monthly with transparent reporting and no hidden fees.',
  },
  {
    icon: Shield,
    title: 'Rights Protection',
    description: 'Your music is protected with Content ID and copyright monitoring across platforms.',
  },
  {
    icon: Zap,
    title: 'Instant Releases',
    description: 'Upload once and your music goes live on all platforms within 24-48 hours.',
  },
  {
    icon: Music,
    title: 'Artist Tools',
    description: 'Professional tools for playlist pitching, fan engagement, and career growth.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Everything You Need to
            <span className="text-gradient block">Succeed in Music</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From distribution to analytics, we provide the complete toolkit for modern music professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-primary-50 hover:to-primary-100 transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-primary-200"
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary-600 group-hover:text-primary-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
