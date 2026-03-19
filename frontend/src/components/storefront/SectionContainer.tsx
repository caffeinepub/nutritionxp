import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({ children, id, className = '' }: SectionContainerProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  );
}
