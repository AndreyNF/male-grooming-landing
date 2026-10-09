import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const P = ['7', '922', '177', '77', '18'];
const TEL = '+' + P.join('');
const SHOW = `+${P[0]} ${P[1]} ${P[2]}-${P[3]}-${P[4]}`;
const METRIKA_ID = 103934882;

type Place = 'hero' | 'find' | 'contacts' | 'footer';

interface PhoneButtonProps {
  place: Place;
}

const goal = (name: string, place: Place) => {
  try {
    const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
    if (typeof ym === 'function') ym(METRIKA_ID, 'reachGoal', name, { place });
  } catch {
    return;
  }
};

const BASE =
  'inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const STYLES: Record<Place, string> = {
  hero: 'w-full max-w-xs lg:w-auto bg-transparent border-[1.5px] border-gold text-gold hover:bg-gold hover:text-black font-semibold px-6 py-[14px] rounded-lg text-base',
  contacts:
    'w-full sm:w-auto mt-3 bg-transparent border-[1.5px] border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 h-11 rounded-md text-sm',
  find: 'text-gold hover:text-gold/80 font-semibold rounded-sm underline-offset-4 hover:underline',
  footer: 'text-gold hover:opacity-80 font-semibold mt-1 rounded-sm self-start',
};

const PhoneButton = ({ place }: PhoneButtonProps) => {
  const [revealed, setRevealed] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const className = `${BASE} ${STYLES[place]}`;

  useEffect(() => {
    if (revealed) linkRef.current?.focus();
  }, [revealed]);

  const handleReveal = () => {
    setRevealed(true);
    goal('phone_reveal', place);
    if (window.matchMedia('(pointer: coarse)').matches) {
      goal('phone_call', place);
      window.location.href = 'tel:' + TEL;
    }
  };

  if (!revealed) {
    return (
      <button type="button" className={className} onClick={handleReveal} aria-label="Позвонить Натали">
        <Icon name="Phone" size={place === 'hero' || place === 'contacts' ? 20 : 16} />
        Позвонить
      </button>
    );
  }

  return (
    <a
      ref={linkRef}
      href={'tel:' + TEL}
      className={className}
      onClick={() => goal('phone_call', place)}
      aria-label={`Позвонить по номеру ${SHOW}`}
    >
      <Icon name="Phone" size={place === 'hero' || place === 'contacts' ? 20 : 16} />
      {SHOW}
    </a>
  );
};

export default PhoneButton;
