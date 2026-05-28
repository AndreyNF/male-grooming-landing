import type { ReactNode } from 'react';

interface ProseSectionProps {
  title?: string;
  bg?: 'white' | 'gray';
  children: ReactNode;
  className?: string;
}

const ProseSection = ({
  title,
  bg = 'white',
  children,
  className = '',
}: ProseSectionProps) => {
  const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`${bgClass} py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-3xl">
        {title && (
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            {title}
          </h2>
        )}
        <div className="text-steel text-base leading-relaxed space-y-4">{children}</div>
      </div>
    </section>
  );
};

export default ProseSection;
