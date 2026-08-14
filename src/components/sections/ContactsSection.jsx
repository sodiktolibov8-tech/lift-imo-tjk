import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) return;

    setStatus('loading');

    const success = await sendTelegramNotification(formData);

    if (success) {
      setStatus('success');
      setFormData({ name: '', phone: '', comment: '' });
      setTimeout(() => setStatus('idle'), 5000); // Сброс статуса через 5 сек
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contacts" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Инфо-блок */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Связаться с нами</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-6">Оставьте заявку на консультацию</h2>
            <p className="text-slate-400 mb-8">Наши специалисты свяжутся с вами и подготовят технико-коммерческое предложение.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Адрес</h4>
                  <p className="text-sm text-slate-400">Таджикистан, г. Душанбе</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Телефоны</h4>
                  <p className="text-sm text-slate-400">+992 93 444 37 03 / +992 93 444 37 04</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-sm text-slate-400">info@imo.tj</p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма с отправкой */}
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Заявка успешно отправлена!</h3>
                <p className="text-slate-400 text-sm">Мы перезвоним вам в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Телефон / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+992 900 00 00 00"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Комментарий к заявке</label>
                  <textarea
                    rows="3"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Укажите подробности вашего объекта..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-rose-500 font-medium">Произошла ошибка при отправке. Попробуйте еще раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить заявку
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}