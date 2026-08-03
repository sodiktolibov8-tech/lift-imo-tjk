import React, { useState } from 'react';
import { ArrowUpRight, Gauge, Weight, CheckCircle2, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const liftsData = [
  {
    id: 'passenger',
    title: 'Пассажирские лифты',
    category: 'Лифты',
    description: 'Для жилых комплексов, офисных центров и отелей. Высокий уровень комфорта и бесшумность.',
    speed: 'до 2.5 м/с',
    capacity: 'до 1600 кг',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'panoramic',
    title: 'Панорамные лифты',
    category: 'Лифты',
    description: 'Эстетичные лифты с остеклением для ТРЦ, бизнес-центров и современных зданий.',
    speed: 'до 2.0 м/с',
    capacity: 'до 1250 кг',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'freight',
    title: 'Грузовые лифты',
    category: 'Лифты',
    description: 'Надежные подъемные механизмы для складов, производств и торговых комплексов.',
    speed: 'до 1.0 м/с',
    capacity: 'до 5000 кг',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'cottage',
    title: 'Коттеджные лифты',
    category: 'Лифты',
    description: 'Компактные бесшумные решения для частных домов и двухуровневых квартир.',
    speed: 'до 0.63 м/с',
    capacity: 'до 400 кг',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'escalators',
    title: 'Эскалаторы и Траволаторы',
    category: 'Подъемники',
    description: 'Для торговых и пассажирских терминалов с высокой пропускной способностью.',
    speed: '0.5 м/с',
    capacity: 'до 9000 чел/час',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedImageIndex, setSelectedImageIndex] = useState({});

  const categories = ['Все', 'Лифты', 'Подъемники'];

  const filteredLifts = activeCategory === 'Все'
    ? liftsData
    : liftsData.filter(item => item.category === activeCategory);

  const handleNextPhoto = (id, maxLen) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % maxLen
    }));
  };

  const handlePrevPhoto = (id, maxLen) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + maxLen) % maxLen
    }));
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Каталог оборудования
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Выберите подходящее решение для вашего объекта
          </p>
        </div>

        {/* Кнопки переключения категорий */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLifts.map((item) => {
            const currentImgIdx = selectedImageIndex[item.id] || 0;
            const currentImg = item.images[currentImgIdx];

            return (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Галерея фотографий с кнопками листания */}
                  <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                    <img
                      src={currentImg}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Категория сверху */}
                    <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-blue-400 border border-slate-800">
                      {item.category}
                    </span>

                    {/* Кнопки переключения фото (если больше 1 фото) */}
                    {item.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handlePrevPhoto(item.id, item.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white transition-all backdrop-blur-md"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleNextPhoto(item.id, item.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white transition-all backdrop-blur-md"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Точки-индикаторы фото */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-slate-950/60 px-2 py-1 rounded-full backdrop-blur-md">
                      {item.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImgIdx === idx ? 'bg-blue-500 w-4' : 'bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Контент карточки */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Характеристики */}
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Gauge className="w-4 h-4 text-blue-400" />
                      <span>Скорость: <strong>{item.speed}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Weight className="w-4 h-4 text-blue-400" />
                      <span>Груз: <strong>{item.capacity}</strong></span>
                    </div>
                  </div>

                  <a
                    href="#calculator"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all text-xs"
                  >
                    Заказать расчёт
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}