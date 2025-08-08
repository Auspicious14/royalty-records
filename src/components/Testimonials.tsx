import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Independent Artist',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face',
    content: 'Royalty Records transformed my music career. The analytics and fast payouts have allowed me to focus on creating music.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Producer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The global distribution network is incredible. My tracks reached audiences I never thought possible.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Singer-Songwriter',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Finally, a platform that puts artists first. Transparent reporting and excellent customer support.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            What Artists Say
            <span className="text-gradient block">About Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary-300 mb-4" />
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
