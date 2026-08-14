import React from 'react';
import { ArrowRight, Shield, Wrench } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-slate-950 text-white pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левый блок: Текст о компании */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Официальный партнёр KONE и OTIS в Таджикистане
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Современные лифты и эскалаторы <span className="text-blue-500">ООО «ИМО»</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Полный цикл услуг: от проектирования и прямой поставки до профессионального монтажа, ввода в эксплуатацию и круглосуточного обслуживания лифтового оборудования по всему Таджикистану.
            </p>

            {/* Кнопки действия */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm"
              >
                Рассчитать стоимость
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
              >
                Каталог оборудования
              </a>
            </div>

            {/* Плашки преимуществ */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-300">Монтаж и сервис 24/7</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-300">Лицензия Госнадзора РТ</span>
              </div>
            </div>
          </div>

          {/* Правый блок: Картинка / Баннер */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&q=80&w=1000"
                alt="Лифты ИМО"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <p className="text-sm font-bold text-white">Пассажирские и грузовые лифты</p>
                <p className="text-xs text-slate-400 mt-1">Высокий уровень комфорта и плавность хода для жилых комплексов и ТРЦ</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}