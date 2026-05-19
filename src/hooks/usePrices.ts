import { useState, useEffect } from 'react';

const PRICES_URL = 'https://functions.poehali.dev/5fa88c34-bc2c-4881-8f1f-6ee77b9ec8ad';

export interface PriceItem {
  slug: string;
  label: string;
  price: string;
  category: string;
  sort_order: number;
}

export function usePrices() {
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PRICES_URL)
      .then(r => r.json())
      .then(data => setPrices(data.prices || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { prices, loading };
}

export async function updatePrice(slug: string, price: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(PRICES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Admin-Password': password },
    body: JSON.stringify({ slug, price }),
  });
  return res.json();
}

export { PRICES_URL };
