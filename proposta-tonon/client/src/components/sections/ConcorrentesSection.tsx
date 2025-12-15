import { AlertTriangle, Target, Lightbulb } from 'lucide-react';

export default function ConcorrentesSection() {
  return (
    <section id="concorrentes" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E94] mb-4">
            ⚡️ Análise de Concorrentes
          </h2>
          <p className="text-gray-600 text-lg">
            Cenário competitivo e oportunidades de diferenciação
          </p>
        </div>

        {/* Cenário Competitivo */}
        <div className="mb-8">
          <div className="card-tonon">
            <h3 className="text-2xl font-bold text-[#3E3E94] mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Cenário Competitivo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-3">❌ Problema: Barreira de Entrada Baixa</h4>
                <p className="text-gray-700 mb-4">
                  Surgiram muitos "aventureiros" no mercado. A concorrência por preço é desleal e brutal.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Impacto:</strong> Margem de lucro reduzida para quem compete apenas por preço
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700 mb-3">✅ Oportunidade: O Diferencial Real</h4>
                <p className="text-gray-700 mb-4">
                  A maior dor dos clientes NÃO é preço, mas sim: <strong>atraso na entrega</strong> e <strong>falta de acabamento/limpeza</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Insight:</strong> Quem cumpre prazo e deixa a obra limpa tem ouro nas mãos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vantagem Competitiva */}
        <div className="mb-12">
          <div className="card-tonon border-l-4 border-[#FFF111]">
            <h3 className="text-2xl font-bold text-[#3E3E94] mb-6 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-[#FFF111]" />
              Vantagem Competitiva da Tonon
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#3E3E94]/5 to-[#FFF111]/5 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">🎯 Posicionamento Estratégico</p>
                <p className="text-gray-700">
                  Parar de tentar falar com "quem quer preço baixo" e focar na comunicação com clientes de Classe Média que querem reformar sem dor de cabeça.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#3E3E94]/5 to-[#FFF111]/5 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">💬 Linguagem de Venda</p>
                <p className="text-gray-700">
                  Não vender apenas o portão, vender a <strong>tranquilidade</strong>. Mensagens como "Segurança para sua família", "Valorização do seu imóvel", "Acabamento que dura o inverno todo".
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#3E3E94]/5 to-[#FFF111]/5 p-4 rounded-lg">
                <p className="font-semibold text-[#3E3E94] mb-2">📱 Papel do Digital</p>
                <p className="text-gray-700">
                  O cliente não vai mais apenas na loja de bairro. O Instagram é a "vitrine". Antes de ligar, o cliente entra no perfil para ver se a empresa é "de verdade".
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativo: Concorrentes vs Tonon */}
        <div className="card-tonon">
          <h3 className="text-2xl font-bold text-[#3E3E94] mb-6">Comparativo: Mercado vs Tonon</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#3E3E94] text-white">
                  <th className="p-3 text-left">Aspecto</th>
                  <th className="p-3 text-left">Concorrentes Típicos</th>
                  <th className="p-3 text-left">Tonon (Potencial)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-[#3E3E94]">Estratégia de Preço</td>
                  <td className="p-3 text-gray-600">Competição brutal por preço</td>
                  <td className="p-3 text-green-600">Valor agregado + qualidade</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-[#3E3E94]">Presença Digital</td>
                  <td className="p-3 text-gray-600">Fraca ou inexistente</td>
                  <td className="p-3 text-green-600">Instagram bem alinhado + Google</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-[#3E3E94]">Prova Social</td>
                  <td className="p-3 text-gray-600">Poucas fotos de obras</td>
                  <td className="p-3 text-green-600">Bons Depoimentos</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-[#3E3E94]">Diferencial</td>
                  <td className="p-3 text-gray-600">Nenhum claro</td>
                  <td className="p-3 text-green-600">Prazo + Acabamento + Design</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-[#3E3E94]">Público-Alvo</td>
                  <td className="p-3 text-gray-600">Qualquer um</td>
                  <td className="p-3 text-green-600">Classe Média/Média-Alta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
