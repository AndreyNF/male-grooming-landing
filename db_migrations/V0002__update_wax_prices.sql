UPDATE t_p82186569_male_grooming_landin.prices SET label='Окантовка бороды', price='1 000 ₽', sort_order=1 WHERE slug='boroda';
UPDATE t_p82186569_male_grooming_landin.prices SET price='1 000 ₽', sort_order=3 WHERE slug='podmyshki';
UPDATE t_p82186569_male_grooming_landin.prices SET sort_order=4 WHERE slug='grud';
UPDATE t_p82186569_male_grooming_landin.prices SET sort_order=5 WHERE slug='zhivot';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Спина / торс', price='3 500 ₽', sort_order=6 WHERE slug='spina';
UPDATE t_p82186569_male_grooming_landin.prices SET sort_order=7 WHERE slug='yagoditsy';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Бикини «Классика»', price='3 000 ₽', sort_order=8 WHERE slug='bikini-classic';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Бикини «Глубокое»', price='4 000 ₽', sort_order=9 WHERE slug='bikini-deep';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Руки полностью', price='3 000 ₽', sort_order=12 WHERE slug='ruki';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Голени', price='2 500 ₽', sort_order=13 WHERE slug='golen';
UPDATE t_p82186569_male_grooming_landin.prices SET label='Ноги полностью', price='5 000 ₽', sort_order=14 WHERE slug='nogi';
INSERT INTO t_p82186569_male_grooming_landin.prices (slug, label, price, category, sort_order) VALUES
 ('ushi-nos', 'Уши / нос', '1 000 ₽', 'face', 2),
 ('combo-bikini-podmyshki', 'Комбо «Глубокое бикини + подмышки» · Популярное комбо', '5 000 ₽', 'bikini', 10),
 ('ruki-do-loktya', 'Руки до локтя', '2 500 ₽', 'legs', 11);