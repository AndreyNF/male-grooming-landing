export interface BlogPostMeta {
  slug: string;
  path: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'muzhskaya-depilyaciya-ekaterinburg',
    path: '/blog/muzhskaya-depilyaciya-ekaterinburg/',
    title: 'Мужская депиляция воском в Екатеринбурге',
    description:
      'Мужская восковая депиляция в Екатеринбурге: зоны, цены, запись. Только воск для мужчин. ул. Культуры 2. @sugar_TS.',
    excerpt:
      'Полный гид по мужской депиляции воском: зоны, прайс и как записаться к Натали в Екатеринбурге.',
    date: '2026-05-01',
  },
  {
    slug: 'pervaya-depilyaciya-voskom-muzhchiny',
    path: '/blog/pervaya-depilyaciya-voskom-muzhchiny/',
    title: 'Первая депиляция воском для мужчин',
    description:
      'Как подготовиться к первой восковой депиляции мужчине: длина волос 5–8 мм, боль, что взять с собой. Екатеринбург @sugar_TS.',
    excerpt:
      'Подготовка к первому визиту, ощущения во время процедуры и что ожидать после — без лишних страхов.',
    date: '2026-05-05',
  },
  {
    slug: 'vosk-ili-lazer-muzhchiny',
    path: '/blog/vosk-ili-lazer-muzhchiny/',
    title: 'Воск или лазер для мужчин — что выбрать',
    description:
      'Восковая депиляция или лазер для мужчин: сравнение по цене, боли и результату. Работаю воском в Екатеринбурге @sugar_TS.',
    excerpt:
      'Честное сравнение воска и лазера для мужской кожи — когда что имеет смысл.',
    date: '2026-05-08',
  },
  {
    slug: 'okantovka-borody-voskom-ekaterinburg',
    path: '/blog/okantovka-borody-voskom-ekaterinburg/',
    title: 'Окантовка бороды воском в Екатеринбурге',
    description:
      'Окантовка бороды воском для мужчин — 1000 ₽. Чёткий контур без бритвы. Екатеринбург, ул. Культуры 2. @sugar_TS.',
    excerpt:
      'Как делается окантовка бороды воском, сколько держится и почему это удобнее бритвы.',
    date: '2026-05-10',
  },
  {
    slug: 'muzhskaya-depilyaciya-bikini-ekaterinburg',
    path: '/blog/muzhskaya-depilyaciya-bikini-ekaterinburg/',
    title: 'Мужская депиляция бикини воском в Екатеринбурге',
    description:
      'Депиляция бикини для мужчин воском: классика 2500 ₽, глубокое 3000 ₽. Екатеринбург @sugar_TS.',
    excerpt:
      'Классическое и глубокое бикини воском — зоны, цены и как проходит процедура.',
    date: '2026-05-12',
  },
  {
    slug: 'depilyaciya-spinu-grud-muzhchiny-ekb',
    path: '/blog/depilyaciya-spinu-grud-muzhchiny-ekb/',
    title: 'Депиляция спины, груди и живота для мужчин',
    description:
      'Восковая депиляция груди, живота, спины и ягодиц для мужчин в Екатеринбурге. Цены от 800 ₽. @sugar_TS.',
    excerpt:
      'Тело без лишней растительности: грудь, живот, спина, ягодицы — зоны и прайс.',
    date: '2026-05-14',
  },
  {
    slug: 'depilyaciya-nog-ruk-muzhchiny',
    path: '/blog/depilyaciya-nog-ruk-muzhchiny/',
    title: 'Депиляция ног и рук воском для мужчин',
    description:
      'Депиляция ног и рук воском для мужчин в Екатеринбурге: ноги 2000 ₽, голень 1000 ₽, руки 1200 ₽. @sugar_TS.',
    excerpt:
      'Ноги, голени и руки — когда имеет смысл воск и сколько стоит в салоне.',
    date: '2026-05-16',
  },
  {
    slug: 'avtozagar-muzhchiny-ekaterinburg',
    path: '/blog/avtozagar-muzhchiny-ekaterinburg/',
    title: 'Автозагар для мужчин в Екатеринбурге',
    description:
      'Профессиональный автозагар для мужчин в Екатеринбурге. Естественный оттенок, запись @sugar_TS.',
    excerpt:
      'Моментальный загар без солнца: три шага, уход и запись в Telegram.',
    date: '2026-05-18',
  },
  {
    slug: 'shugaring-vs-vosk',
    path: '/blog/shugaring-vs-vosk/',
    title: 'Шугаринг или воск для мужчин',
    description:
      'Шугаринг или восковая депиляция для мужчин — в чём разница. Работаю воском в Екатеринбурге @sugar_TS.',
    excerpt:
      'Сравнение шугаринга и воска на мужской коже — почему я выбираю воск.',
    date: '2026-04-20',
  },
];

export const FULL_PRICE_ROWS = [
  { label: 'Борода / окантовка', price: '1 000 ₽' },
  { label: 'Подмышки', price: '700 ₽' },
  { label: 'Грудь', price: '1 200 ₽' },
  { label: 'Живот', price: '800 ₽' },
  { label: 'Спина', price: '1 500 ₽' },
  { label: 'Ягодицы', price: '1 000 ₽' },
  { label: 'Классическое бикини', price: '2 500 ₽' },
  { label: 'Глубокое бикини', price: '3 000 ₽' },
  { label: 'Руки (полностью)', price: '1 200 ₽' },
  { label: 'Ноги (полностью)', price: '2 000 ₽' },
  { label: 'Голень', price: '1 000 ₽' },
];
