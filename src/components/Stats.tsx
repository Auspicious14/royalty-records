import { TrendingUp, Users, Music, Award } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    number: '$50M+',
    label: 'Total Royalties Paid',
    description: 'To artists worldwide',
  },
  {
    icon: Users,
    number: '10,000+',
    label: 'Active Artists',
    description: 'Trust our platform',
  },
  {
    icon: Music,
    number: '2M+',
    label: 'Songs Distributed',
    description: 'Across all platforms',
  },
  {
    icon: Award,
    number: '150+',
    label: 'Countries',
    description: 'Global reach',
  },
]

export default function Stats() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Trusted by Artists
            <span className="text-gradient block">Worldwide</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4 group-hover:bg-gold-500 transition-colors">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
