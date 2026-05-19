import { useState } from 'react';
import { usePrices, updatePrice, PriceItem } from '@/hooks/usePrices';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CATEGORY_LABELS: Record<string, string> = {
  face: 'Лицо',
  body: 'Тело',
  bikini: 'Бикини',
  legs: 'Ноги и руки',
};

export default function Admin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');
  const [editSlug, setEditSlug] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const { prices, loading } = usePrices();

  const handleLogin = async () => {
    setAuthError('');
    const res = await fetch('https://functions.poehali.dev/5fa88c34-bc2c-4881-8f1f-6ee77b9ec8ad', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': password },
      body: JSON.stringify({ slug: '__check__', price: '__check__' }),
    });
    if (res.status === 404) {
      setAuthed(true);
    } else if (res.status === 401) {
      setAuthError('Неверный пароль');
    } else {
      setAuthed(true);
    }
  };

  const startEdit = (item: PriceItem) => {
    setEditSlug(item.slug);
    setEditValue(item.price);
    setSaveMsg('');
  };

  const saveEdit = async () => {
    if (!editSlug) return;
    setSaving(true);
    setSaveMsg('');
    const result = await updatePrice(editSlug, editValue, password);
    setSaving(false);
    if (result.ok) {
      setSaveMsg('Сохранено ✓');
      setEditSlug(null);
      window.location.reload();
    } else {
      setSaveMsg(result.error || 'Ошибка');
    }
  };

  const grouped = prices.reduce<Record<string, PriceItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Lock" size={20} className="text-gold" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-black mb-1">Админ-панель</h1>
            <p className="text-steel text-sm">Управление ценами · sugarts.ru</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-black mb-1 block">Пароль</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold pr-11"
                  placeholder="Введите пароль"
                  autoFocus
                />
                <button
                  type="button"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-0 top-0 h-full w-11 flex items-center justify-center text-steel hover:text-black transition-colors"
                >
                  <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
                </button>
              </div>
              {authError && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <Icon name="AlertCircle" size={12} />
                  {authError}
                </p>
              )}
            </div>
            <Button onClick={handleLogin} className="w-full bg-black text-gold hover:bg-black/85 font-semibold h-11">
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black border-b border-gold/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-gold uppercase tracking-widest">Натали</span>
            <span className="text-white/40 text-sm">· Цены</span>
          </div>
          <a href="/" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1">
            <Icon name="ArrowLeft" size={14} />
            На сайт
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">

        {/* Инструкция */}
        <div className="bg-white border border-gray-200 rounded-xl mb-8 overflow-hidden">
          <div className="bg-black px-5 py-3 flex items-center gap-2">
            <Icon name="BookOpen" size={15} className="text-gold" />
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wide">Как пользоваться</span>
          </div>
          <div className="px-5 py-4 space-y-4 text-sm text-steel">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black text-gold font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <p>Найди нужную зону в списке ниже. Зоны разбиты по категориям: <strong className="text-black">Лицо, Тело, Бикини, Ноги и руки</strong>.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black text-gold font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <p>Нажми на цену — она выделится и появится поле для ввода. Введи новую цену в формате <strong className="text-black">1 500 ₽</strong> (с пробелом и знаком рубля).</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black text-gold font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <p>Нажми <strong className="text-black">«Сохранить»</strong> или клавишу <strong className="text-black">Enter</strong>. Цена изменится на сайте мгновенно для всех посетителей.</p>
            </div>
            <div className="border-t border-gray-100 pt-3 flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <Icon name="AlertCircle" size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <p>Формат цены важен — вводи именно так: <code className="bg-gray-100 px-1 rounded text-black">1 500 ₽</code> или <code className="bg-gray-100 px-1 rounded text-black">700 ₽</code>.</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="AlertCircle" size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <p>Изменить название зоны здесь нельзя — только цену. Для переименования обратись к разработчику.</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="AlertCircle" size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <p>Если цена не обновилась на сайте — обнови страницу (F5 или потяни вниз на телефоне).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-heading font-bold text-black">Цены на услуги</h2>
          <p className="text-steel text-sm mt-1">Нажмите на цену чтобы изменить.</p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-steel">Загрузка...</div>
        ) : (
          <div className="space-y-6">
            {Object.entries(CATEGORY_LABELS).map(([cat, catLabel]) => {
              const items = grouped[cat] || [];
              if (!items.length) return null;
              return (
                <div key={cat} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-black px-5 py-3">
                    <h3 className="text-gold font-heading font-semibold text-sm uppercase tracking-wide">{catLabel}</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {items.map(item => (
                      <div key={item.slug} className="px-4 sm:px-5 py-3">
                        {editSlug === item.slug ? (
                          /* Режим редактирования — на мобиле вертикально */
                          <div className="flex flex-col gap-2">
                            <span className="text-black text-sm font-medium">{item.label}</span>
                            <input
                              type="text"
                              value={editValue}
                              onChange={e => setEditValue(e.target.value)}
                              onKeyDown={e => e.key === 'Enter' && saveEdit()}
                              className="border-2 border-gold rounded-lg px-3 py-2.5 text-sm w-full focus:outline-none text-right font-semibold"
                              autoFocus
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={saveEdit}
                                disabled={saving}
                                className="flex-1 bg-black text-gold text-sm py-2.5 rounded-lg font-semibold hover:bg-black/80 disabled:opacity-50"
                              >
                                {saving ? 'Сохраняю...' : 'Сохранить'}
                              </button>
                              <button
                                onClick={() => setEditSlug(null)}
                                className="flex-1 border border-gray-300 text-steel text-sm py-2.5 rounded-lg font-medium hover:border-gray-400 hover:text-black"
                              >
                                Отмена
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Обычный режим */
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-black text-sm leading-snug">{item.label}</span>
                            <button
                              onClick={() => startEdit(item)}
                              className="text-gold font-semibold text-sm hover:underline flex items-center gap-1 shrink-0"
                            >
                              {item.price}
                              <Icon name="Pencil" size={12} className="text-gold/60" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {saveMsg && (
          <div className="mt-4 text-center text-sm text-green-600 font-medium">{saveMsg}</div>
        )}
      </div>
    </div>
  );
}