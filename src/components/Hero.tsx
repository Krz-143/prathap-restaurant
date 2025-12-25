import { Phone } from 'lucide-react';

export default function Hero() {
  const handleCallClick = () => {
    window.location.href = 'tel:+919345292250';
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 bg-amber-600/90 text-amber-50 rounded-full text-sm font-medium tracking-wide mb-4">
            Since 1999
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          PRATHAP
          <span className="block text-3xl md:text-5xl mt-2 text-amber-400 font-semibold">
            Traditional Restaurant
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 mb-3 font-light">
          Serving Tradition for Over 25 Years
        </p>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Authentic South Indian Flavors You'll Always Remember
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleCallClick}
            className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Call Now
          </button>

          <a
            href="#menu"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
