import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Análise da Empresa', href: '#empresa' },
    { label: 'Pesquisa de Mercado', href: '#mercado' },
    { label: 'Concorrentes', href: '#concorrentes' },
    { label: 'Soluções', href: '#solucoes' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#3E3E94] shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('#hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/images/logo-tonon.jpg" 
            alt="Serralheria Tonon" 
            className="h-12 w-auto object-cover object-center"
            style={{maxHeight: '48px', objectFit: 'cover'}}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <button
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#FFF111] transition-colors whitespace-nowrap" style={{color: '#37ff0f'}}
              >
                {item.label}
              </button>
              {index < navItems.length - 1 && (
                <ChevronRight className="w-4 h-4 text-[#FFF111] mx-1" />
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/5516981005730?text=Olá!%20Gostaria%20de%20discutir%20a%20proposta%20de%20análise%20digital%20para%20a%20Serralheria%20Tonon."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#FFF111] text-[#3E3E94] font-bold px-6 py-2 rounded-lg hover:bg-[#FFE680] transition-colors text-sm"
        >
          Fale Conosco
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#3E3E94] transition-colors border-b border-gray-100 text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5516981005730?text=Olá!%20Gostaria%20de%20discutir%20a%20proposta%20de%20análise%20digital%20para%20a%20Serralheria%20Tonon."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-bold text-white bg-[#3E3E94] hover:bg-[#2D2D6F] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
