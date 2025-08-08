import { Play, TrendingUp, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-royal overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Your Music,
            <span className="text-gradient block">Your Royalties</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier platform for music distribution and royalty management. 
            Get your music on all major streaming platforms and track every penny you earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gold-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
            <button className="group flex items-center space-x-2 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-gold-400 mr-2" />
              <span className="text-3xl font-bold text-white">$50M+</span>
            </div>
            <p className="text-white/70">Royalties Distributed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-gold-400 mr-2" />
              <span className="text-3xl font-bold text-white">10K+</span>
            </div>
            <p className="text-white/70">Active Artists</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-6 w-6 text-gold-400 mr-2" />
              <span className="text-3xl font-bold text-white">150+</span>
            </div>
            <p className="text-white/70">Countries Reached</p>
          </div>
        </div>
      </div>
    </section>
  )
}
