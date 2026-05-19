const REVIEWS = [
  {
    name: 'Анатолий',
    date: 'Сегодня',
    service: 'Мужская депиляция',
    text: 'Хочу поделиться своим восторгом от посещения мастера Наталия. Давно подумывал о мужской депиляции, но всё было как-то страшно и непонятно. Однако, мой визит полностью развеял все опасения. Процедура прошла максимально комфортно, быстро и, что самое главное, безболезненно. Мастер очень профессиональна, внимательна к деталям и создала по-настоящему расслабляющую атмосферу. Результат превзошёл все ожидания — кожа гладкая, ухоженная, никакого раздражения. Однозначно буду рекомендовать всем своим знакомым мужчинам, кто ценит комфорт и хочет выглядеть на все сто!',
    initials: 'А',
    color: 'bg-amber-600',
  },
  {
    name: 'Nikita',
    date: '12 мая',
    service: 'Мужская депиляция',
    text: 'Натали — профессионал с лёгкой рукой. Процедура, которая представлялась, как небольшая пытка прошла легко и быстро. Очень приятная в общении. Кожа гладкая, приятная на ощупь.',
    initials: 'N',
    color: 'bg-green-600',
  },
  {
    name: 'Евгений',
    date: '23 апреля',
    service: 'Мужская депиляция',
    text: 'Всё отлично! Услуга полностью соответствует описанию! Спасибо!',
    initials: 'Е',
    color: 'bg-slate-500',
  },
  {
    name: 'Владимир',
    date: '13 марта',
    service: 'Мужская депиляция',
    text: 'Всё прошло очень гладко. Рекомендую!',
    initials: 'В',
    color: 'bg-stone-500',
  },
  {
    name: 'Павел',
    date: '15 января',
    service: 'Мужская депиляция',
    text: 'Самая безболезненная депиляция в моей жизни. Наталья отличный собеседник, время прошло незаметно.',
    initials: 'П',
    color: 'bg-blue-600',
  },
  {
    name: 'Сергей',
    date: '12 января',
    service: 'Мужская депиляция',
    text: 'Всё супер!',
    initials: 'С',
    color: 'bg-zinc-600',
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className="text-amber-400 text-base">★</span>
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-2">
            Отзывы клиентов
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Stars />
            <span className="text-steel text-sm font-medium">5.0 · {REVIEWS.length} отзывов</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {REVIEWS.map((r) => (
            <div
              key={r.name + r.date}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col gap-3"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm ${r.color}`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-black text-sm leading-tight">{r.name}</p>
                  <p className="text-steel/60 text-xs">{r.date}</p>
                </div>
              </div>

              {/* Stars + service */}
              <div>
                <Stars />
                <p className="text-steel/50 text-xs mt-0.5">{r.service}</p>
              </div>

              {/* Text */}
              <p className="text-steel text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
