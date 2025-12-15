import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import EmpresaSection from '@/components/sections/EmpresaSection';
import MercadoSection from '@/components/sections/MercadoSection';
import ConcorrentesSection from '@/components/sections/ConcorrentesSection';
import SolucoesSection from '@/components/sections/SolucoesSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <EmpresaSection />
        <SectionDivider currentSection="Análise da Empresa" nextSection="Pesquisa de Mercado" />
        <MercadoSection />
        <SectionDivider currentSection="Pesquisa de Mercado" nextSection="Concorrentes" />
        <ConcorrentesSection />
        <SectionDivider currentSection="Concorrentes" nextSection="Soluções" />
        <SolucoesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
