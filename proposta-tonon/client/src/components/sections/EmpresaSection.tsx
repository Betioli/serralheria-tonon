import { TrendingUp, Users, MessageSquare, Eye } from 'lucide-react';

export default function EmpresaSection() {
  return (
    <section id="empresa" className="py-16 md:py-24 bg-white" style={{height: '870px'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E94] mb-4">
            📊 Análise da Empresa
          </h2>
          <p className="text-gray-600 text-lg">
            Diagnóstico atual do Instagram e presença digital da Serralheria Tonon
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Instagram Analysis */}
          <div className="card-tonon">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#ig-gradient)" />
                <circle cx="12" cy="12" r="3.5" fill="white" />
                <circle cx="17" cy="7" r="1.5" fill="white" />
                <defs>
                  <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#FFF111" />
                    <stop offset="100%" stopColor="#FFE680" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-2xl font-bold text-[#3E3E94]">Instagram</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Engajamento Atual</p>
                <p className="text-3xl font-bold text-[#3E3E94]">Moderado/Baixo</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Curtidas/Post</p>
                  <p className="text-2xl font-bold text-[#FFF111]">5-15</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Comentários</p>
                  <p className="text-2xl font-bold text-[#FFF111]">0-1</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Problemas Identificados:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✗ Frequência baixa e irregular de postagens</li>
                  <li>✗ Ausência de CTAs claras nas legendas</li>
                  <li>✗ Pouca utilização de Reels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Meu Negócio Analysis */}
          <div className="card-tonon">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#3E3E94" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white" />
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#FFF111" />
              </svg>
              <h3 className="text-2xl font-bold text-[#3E3E94]">Google Meu Negócio</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Status Atual</p>
                <p className="text-3xl font-bold text-[#3E3E94]">Parcialmente Otimizado</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Avaliações</p>
                  <p className="text-2xl font-bold text-[#FFF111]">Bom Número</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Intervalo entre avaliações</p>
                  <p className="text-2xl font-bold text-[#FFF111]">2 a 3 meses</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Oportunidades de Melhoria:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Aumentar frequência de avaliações (pessoas compram de pessoas)</li>
                  <li>✓ Adicionar postagens/ofertas com SEO e metadados</li>
                  <li>✓ Criar catálogo de produtos na ficha</li>
                  <li>✓ Adicionar mais fotos para mostrar atualização constante</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-[#3E3E94]/5 to-[#FFF111]/5 rounded-lg p-8 border border-[#3E3E94]/10 -mt-12" style={{paddingTop: '28px', height: '140px'}}>
          <h3 className="text-xl font-bold text-[#3E3E94] mb-6" style={{fontSize: '18px'}}>Métricas Críticas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center" style={{height: '40px'}}>
              <div className="text-4xl font-bold text-[#FFF111] mb-2" style={{fontSize: '25px'}}>Média</div>
              <p className="text-sm text-gray-600">Frequência de Posts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFF111] mb-2" style={{fontSize: '25px'}}>Ausente</div>
              <p className="text-sm text-gray-600">Estratégia de CTA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFF111] mb-2" style={{fontSize: '25px'}}>Baixa</div>
              <p className="text-sm text-gray-600">Frequência de Avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
