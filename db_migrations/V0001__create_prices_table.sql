CREATE TABLE t_p82186569_male_grooming_landin.prices (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) NOT NULL UNIQUE,
  label VARCHAR(200) NOT NULL,
  price VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

INSERT INTO t_p82186569_male_grooming_landin.prices (slug, label, price, category, sort_order) VALUES
  ('boroda', 'Борода / окантовка', '1 000 ₽', 'face', 1),
  ('podmyshki', 'Подмышки', '700 ₽', 'body', 2),
  ('grud', 'Грудь', '1 200 ₽', 'body', 3),
  ('zhivot', 'Живот', '800 ₽', 'body', 4),
  ('spina', 'Спина', '1 500 ₽', 'body', 5),
  ('yagoditsy', 'Ягодицы', '1 000 ₽', 'body', 6),
  ('bikini-classic', 'Классическое бикини', '2 500 ₽', 'bikini', 7),
  ('bikini-deep', 'Глубокое бикини', '3 000 ₽', 'bikini', 8),
  ('ruki', 'Руки (полностью)', '1 200 ₽', 'legs', 9),
  ('nogi', 'Ноги (полностью)', '2 000 ₽', 'legs', 10),
  ('golen', 'Голень', '1 000 ₽', 'legs', 11);
