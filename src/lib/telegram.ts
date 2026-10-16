const BASE = 'https://t.me/sugar_TS';

export const telegramUrl = (campaign: string) =>
  `${BASE}?utm_source=sugarts.ru&utm_medium=site&utm_campaign=${campaign}`;

export const trackTelegramClick = () => {
  try {
    const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
    if (typeof ym === 'function') ym(103934882, 'reachGoal', 'telegram_click');
  } catch {
    return;
  }
};
