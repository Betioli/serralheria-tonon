import { TrendingUp, Zap, AlertCircle, Target } from 'lucide-react';

export default function MercadoSection() {
  return (
    <section id="mercado" className="py-8 md:py-12 bg-[#F8F9FF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E94] mb-4">
            📈 Pesquisa de Mercado
          </h2>
          <p className="text-gray-600 text-lg">
            Análise do cenário econômico e tendências de consumo para serralheria no RS
          </p>
        </div>

        {/* Panorama Geral */}
        <div className="mb-8">
          <div className="card-tonon border-l-4 border-[#FFF111]">
            <h3 className="text-2xl font-bold text-[#3E3E94] mb-4 flex items-center gap-2">
              <span className="text-3xl">🏗️</span> Panorama Geral
            </h3>
            <p className="text-gray-700 mb-4">
              O mercado de serralheria está diretamente atrelado à construção civil. Após o boom de reformas, o mercado em 2023-2024 passou por uma estabilização com foco em reformas e pequenas obras.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">Desafio Atual</p>
                <p className="text-gray-600">Taxas de juros (Selic) altas desaceleram financiamento de imóveis novos</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">Oportunidade</p>
                <p className="text-gray-600">Mercado de reformas residenciais é o principal foco para pequenas serralherias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tendências de Consumo */}
        <div className="mb-12">
          <div className="card-tonon border-l-4 border-[#FFF111]">
            <h3 className="text-2xl font-bold text-[#3E3E94] mb-4 flex items-center gap-2">
              <span className="text-3xl">✨</span> Tendências de Consumo
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#3E3E94]/5 to-transparent p-4 rounded-lg border border-[#3E3E94]/10">
                <h4 className="font-semibold text-[#3E3E94] mb-2">Estética Minimalista</h4>
                <p className="text-sm text-gray-600">Alumínio preto fosco, acabamento amadeirado e linhas finas são tendência. Quem não oferece parece ultrapassado.</p>
              </div>
              <div className="bg-gradient-to-br from-[#3E3E94]/5 to-transparent p-4 rounded-lg border border-[#3E3E94]/10">
                <h4 className="font-semibold text-[#3E3E94] mb-2">Integração de Ambientes</h4>
                <p className="text-sm text-gray-600">Grandes vãos, vidro temperado e fechamento de sacadas continuam sendo o carro-chefe em apartamentos.</p>
              </div>
              <div className="bg-gradient-to-br from-[#3E3E94]/5 to-transparent p-4 rounded-lg border border-[#3E3E94]/10">
                <h4 className="font-semibold text-[#3E3E94] mb-2">Segurança com Design</h4>
                <p className="text-sm text-gray-600">Grades e portões com design moderno, tubulares e chapas cortadas a laser estão em alta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ICP - Perfil do Cliente Ideal */}
        <div className="mb-12">
          <div className="card-tonon border-l-4 border-[#FFF111]">
            <h3 className="text-2xl font-bold text-[#3E3E94] mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Cliente Ideal (ICP)
            </h3>
            <p className="text-gray-700 mb-6">
              A Serralheria Tonon deve focar na <strong>Classe Média/Média-Alta (Classe B)</strong> - famílias em reforma/construção que investem no patrimônio.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#3E3E94] mb-4">Perfil Demográfico</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Idade:</strong> 30 a 50 anos</li>
                  <li><strong>Localização:</strong> Cidades do RS (Capital, Região Metropolitana, polos)</li>
                  <li><strong>Ocupação:</strong> Pequenos empresários, profissionais liberais, funcionários públicos, forte público no agronegócio</li>
                  <li><strong>Renda:</strong> R$ 5.000 a R$ 15.000 mensais</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#3E3E94] mb-4">O Que Compram</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Portões Automáticos (Design moderno)</li>
                  <li>✓ Fechamento de Sacadas (Vidro temperado)</li>
                  <li>✓ Grades de Proteção (Com estética)</li>
                  <li>✓ Esquadrias de Alumínio (Substituição)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dores do Cliente */}
        <div className="card-tonon border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-[#3E3E94] mb-4 flex items-center gap-2">
            <span className="text-3xl">⚠️</span> Principais Dores do Cliente
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-semibold text-red-700 mb-2">Medo do Golpe</p>
              <p className="text-sm text-gray-600">Pagar 50% de entrada e o serralheiro sumir é muito comum no mercado</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-semibold text-red-700 mb-2">Acabamento Porco</p>
              <p className="text-sm text-gray-600">Medo de instalar um portão caro e ficar torto ou com solda grosseira</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-semibold text-red-700 mb-2">Obra</p>
              <p className="text-sm text-gray-600">Má gestão de obra, sujeira e desorganização, atrasos e descumprimento de prazos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
