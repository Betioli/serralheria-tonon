import { ChevronRight } from 'lucide-react';

interface SectionDividerProps {
  currentSection: string;
  nextSection: string;
}

export default function SectionDivider({ currentSection, nextSection }: SectionDividerProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return null;
}
