import React from 'react';
import { ArrowRight, ShieldCheck, Wrench, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Слайды с качественными фото
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&q=80&w=1200',
    title: 'Пассажирские лифты',
    subtitle: 'Высокий уровень комфорта и плавность хода для жилых комплексов'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    title: 'Панорамные решения',
    subtitle: 'Эстетичные лифты с остеклением для ТРЦ и бизнес-центров'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    title: 'Эскалаторы и траволаторы',
    subtitle: 'Надежное оборудование высокой пропускной способности'
  }
];

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white pt-8 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Левый блок с текстом */}
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Официальный партнер KONE и OTIS в Таджикистане
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Современные лифты и эскалаторы
            </h1>

            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Полный цикл услуг: от проектирования и поставки до профессионального монтажа и круглосуточного обслуживания лифтового оборудования в Душанбе и по всему Таджикистану.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25"
              >
                Рассчитать стоимость
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Каталог оборудования
              </a>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Монтаж и сервис 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-300 font-medium">Лицензия Госнадзора РТ</span>
              </div>
            </div>
          </div>

          {/* Правый блок: Слайдер с фото */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 h-[380px] sm:h-[480px]">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id} className="relative h-full w-full">
                    {/* Изображение */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Градиентное затемнение снизу */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Подпись к слайду */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-slate-800/80">
                      <h3 className="text-lg font-bold text-white mb-1">{slide.title}</h3>
                      <p className="text-xs text-slate-300">{slide.subtitle}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}