import { CheckCircle, Zap, TrendingUp, Target } from 'lucide-react';

export default function SolucoesSection() {
  return (
    <section id="solucoes" className="py-8 md:py-12 bg-gradient-to-b from-white to-[#F8F9FF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E94] mb-4">
            💡 Problemas & Soluções
          </h2>
          <p className="text-gray-600 text-lg">
            Implementação estratégica em duas fases para transformar a presença digital da Tonon
          </p>
        </div>

        {/* Problema Crítico */}
        <div className="mb-8">
          <div className="card-tonon border-l-4 border-red-500 bg-red-50">
            <h3 className="text-2xl font-bold text-red-700 mb-4">🚨 Problema Crítico</h3>
            <p className="text-gray-700 mb-4">
              A Serralheria Tonon está perdendo algumas oportunidades que podem ser facilmente resolvidas.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Impacto 1</p>
                <p className="text-sm text-gray-600">Clientes em potencial podem não encontram a empresa no Google ou Instagram</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Impacto 2</p>
                <p className="text-sm text-gray-600">Falta de prova social (Fotos e vídeos) gera desconfiança</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-700 mb-2">Impacto 3</p>
                <p className="text-sm text-gray-600">Sem anúncios pagos, a empresa deixa de pegar orçamentos melhores tanto em volume quanto em qualidade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solução: Duas Fases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#3E3E94] mb-6">📋 Solução: Implementação em 2 Fases</h3>

          {/* Fase 1 */}
          <div className="mb-8 card-tonon border-l-4 border-[#FFF111]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94]">
                1
              </div>
              <h4 className="text-2xl font-bold text-[#3E3E94]">Fase 1: Fundamentos (Dias 1-30)</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">🎯 Instagram: Reativação e Estratégia</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Postagens constantes com projetos recentes</li>
                  <li>✓ Definir CTA padrão em todos os posts</li>
                  <li>✓ Responder comentários antigos para reaquecer algoritmo</li>
                  <li>✓ Começar cronograma: 3-4 posts/semana + Stories diários (já fazem)</li>
                  <li>✓ Criar conteúdo nos 4 pilares: Atenção, Interesse, Desejo, Ação</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">📍 Google Meu Negócio: Otimização</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Completar perfil com fotos de qualidade</li>
                  <li>✓ Adicionar serviços por categoria, mostrando os melhores trabalhos</li>
                  <li>✓ Responder a comentários e dúvidas, isso mostra perfil ativo</li>
                  <li>✓ Incentivar avaliações de clientes, pessoas compram de pessoas</li>
                  <li>✓ Fazer posts quinzenais sobre ofertas, novidades e promoções</li>
                </ul>
              </div>
            </div>

            <div>



              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-700 mb-2">📊 Resultado Esperado</p>
                <p className="text-sm text-gray-600">
                  Aumento de 30-50% no engajamento do Instagram, melhor visibilidade no Google, primeiros leads qualificados
                </p>
              </div>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="card-tonon border-l-4 border-[#FFF111]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94]">
                2
              </div>
              <h4 className="text-2xl font-bold text-[#3E3E94]">Fase 2: Aceleração (Dias 31-90)</h4>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">🎬 Conteúdo Avançado</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Produzir Reels de alta qualidade (timelapse, antes/depois)</li>
                  <li>✓ Criar carrosséis educativos (5 sinais de trocar portão, etc)</li>
                  <li>✓ Depoimentos de clientes em vídeo se possível</li>
                  <li>✓ Conteúdo sobre benefícios (não apenas produtos)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">📺 Anúncios Pagos (Google + Instagram) <span className="text-red-600 font-bold">- A parte mais importante</span></p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Google Ads: Palavras-chave de alto intenção de compra (orçamento, esquadria, perto de mim, manutenção, sob medida), necessário ter um LP (site)</li>
                  <li>✓ Instagram Ads: Reels antes e depois, fotos de trabalhos, diário de obra.</li>
                  <li>✓ Orçamento sugerido: R$ 1.000-2.000/mês para começar (somente em anúncios)</li>
                </ul>
              </div>



              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-700 mb-2">📊 Resultado Esperado</p>
                <p className="text-sm text-gray-600">
                  <strong>Aumento de 100-200% em leads qualificados</strong>, melhoria de 50-80% na taxa de conversão de orçamentos, consolidação como referência no mercado local
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ideias de Anúncios */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#3E3E94] mb-6">🎯 Ideias de Anúncios (Google + Instagram)</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Ads */}
            <div className="card-tonon">
              <h4 className="text-xl font-bold text-[#3E3E94] mb-4">Google Ads</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-2">Palavra-chave 1</p>
                  <p className="text-sm text-gray-600">"orçamento esquadria de alumínio perto de mim"</p>
                  <p className="text-xs text-gray-500 mt-2">Título: "Esquadria Alumínio Premium"</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-2">Palavra-chave 2</p>
                  <p className="text-sm text-gray-600">"esquadria de alumínio sob medida"</p>
                  <p className="text-xs text-gray-500 mt-2">Título: "Sob Medida p/ Seu Projeto"</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-2">CTA Padrão</p>
                  <p className="text-sm text-gray-600">"Peça orçamento pelo WhatsApp agora" ou "Solicite seu orçamento no WhatsApp"</p>
                </div>
              </div>
            </div>

            {/* Instagram Ads */}
            <div className="card-tonon">
              <h4 className="text-xl font-bold text-[#3E3E94] mb-4">Instagram Ads</h4>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-pink-700 mb-2">Formato 1: Reel</p>
                  <p className="text-sm text-gray-600">Vídeo de obra sendo feita (timelapse) + antes/depois</p>
                  <p className="text-xs text-gray-500 mt-2">Método AIDA: Atenção → Interesse → Desejo → Ação</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-pink-700 mb-2">Formato 2: Carrossel</p>
                  <p className="text-sm text-gray-600">Fotos de diferentes tipos de serviço com cores e tamanhos</p>
                  <p className="text-xs text-gray-500 mt-2">Foco: Benefício, não apenas o produto</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-pink-700 mb-2">Público-Alvo</p>
                  <p className="text-sm text-gray-600">Classe B, 30-50 anos, interesse em reformas e construção</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prioridades Táticas */}
        <div className="card-tonon border-l-4 border-[#FFF111]">
          <h3 className="text-2xl font-bold text-[#3E3E94] mb-6">🎯 Prioridades Táticas (Ordem de Execução)</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94] flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-[#3E3E94]">Reativar Instagram com cronograma consistente</p>
                <p className="text-sm text-gray-600">Impacto alto, investimento zero, resultado imediato</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94] flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-[#3E3E94]">Otimizar Google Meu Negócio</p>
                <p className="text-sm text-gray-600">Impacto alto, melhora visibilidade local</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94] flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-[#3E3E94]">Produzir conteúdo visual de qualidade</p>
                <p className="text-sm text-gray-600">Impacto alto, investimento zero, base para anúncios</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FFF111] rounded-full flex items-center justify-center font-bold text-[#3E3E94] flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-[#3E3E94]">Lançar anúncios pagos (Google e ou Instagram)</p>
                <p className="text-sm text-gray-600">Impacto muito alto, investimento médio-alto, crescimento acelerado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
