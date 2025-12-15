import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-[#3E3E94] to-[#2D2D6F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonal" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="400" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Transformar a Presença Digital da Tonon?
          </h2>



          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl font-bold text-[#FFF111] mb-2">30-50%</div>
              <p className="text-white text-sm">Aumento de engajamento (Fase 1)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl font-bold text-[#FFF111] mb-2">100-200%</div>
              <p className="text-white text-sm">Aumento de leads (Fase 2)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl font-bold text-[#FFF111] mb-2">50-80%</div>
              <p className="text-white text-sm">Melhoria na conversão</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/5516981005730?text=Olá!%20Gostaria%20de%20discutir%20a%20proposta%20de%20análise%20digital%20para%20a%20Serralheria%20Tonon."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FFF111] text-[#3E3E94] font-bold px-8 py-4 rounded-lg hover:bg-[#FFE680] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
            </a>

          </div>


        </div>
      </div>


    </section>
  );
}
