import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-96 md:h-[500px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-1" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Análise e Proposta Digital
        </h1>

        {/* Owners Names */}
        <p className="text-lg md:text-xl text-white font-semibold mb-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Para Jaime Tonon e Maria Aparecida dos Santos Tonon
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-white/90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Estratégia Digital e Crescimento para Serralheria Tonon
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={() => scrollToSection('empresa')}
          className="flex flex-col items-center gap-2 text-white hover:text-[#FFF111] transition-colors"
        >
          <span className="text-sm font-semibold">Descer</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
