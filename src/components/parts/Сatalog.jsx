import React, { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    subtitle: "// PRODUCTS & EQUIPMENT",
    titlePart1: "Каталог ",
    titlePart2: "Оборудования",
    description: "Полный спектр подъемных механизмов и систем резервного питания. Нажмите на категорию, чтобы узнать подробные характеристики.",
    specTitle: "// Технические характеристики:",
    galleryTitle: "// Фотогалерея:",
    closeBtn: "Закрыть",
    catalogItems: [
      {
        id: '01',
        code: '01 // PASSENGER',
        title: 'Пассажирские лифты',
        imgSrc: '/Passeger.jpg',
        size: 'half',
        details: {
          description: 'Надежные и комфортные лифты для жилых комплексов, бизнес-центров и административных зданий.',
          specs: ['Грузоподъемность: от 320 до 1600 кг', 'Скорость: от 1.0 до 4.0 м/с'],
          gallery: ['/PassegerType1.jpg', '/PassegerType2.jpg']
        }
      },
      {
        id: '02',
        code: '02 // PANORAMIC',
        title: 'Панорамные лифты',
        imgSrc: '/Panoramic.jpg',
        size: 'half',
        details: {
          description: 'Эстетичные лифты со стеклянными кабинами. Идеальное решение для ТРЦ и отелей.',
          specs: ['Остекление: триплекс', 'Обзор: 360 градусов'],
          gallery: ['/PanoramicType1.jpg', '/PanoramicType2.jpg']
        }
      },
      {
        id: '03',
        code: '03 // FREIGHT',
        title: 'Грузовые лифты',
        imgSrc: '/Freight.jpg',
        size: 'half',
        details: {
          description: 'Мощное оборудование для складов и производственных цехов.',
          specs: ['Грузоподъемность: до 5000 кг', 'Двери: усиленные'],
          gallery: ['/FreightType1.jpg', '/FreightType2.jpg']
        }
      },
      {
        id: '04',
        code: '04 // COTTAGE',
        title: 'Коттеджные лифты',
        imgSrc: '/Cottage.jpg',
        size: 'half',
        details: {
          description: 'Компактные и бесшумные лифты для частных домов.',
          specs: ['Питание: 220В', 'Приямок: от 100 мм'],
          gallery: ['/CottageType1.jpg', '/CottageType2.jpg']
        }
      },
      {
        id: '05',
        code: '05 // TRAVELATORS',
        title: 'Траволаторы',
        imgSrc: 'Travolatory.png',
        size: 'half',
        details: {
          description: 'Конвейеры для комфортного перемещения людей с багажом.',
          specs: ['Угол наклона: до 12°', 'Скорость: 0.5 м/с'],
          gallery: ['/TravolatorType1.jpg', '/TravolatorType2.jpg']
        }
      },
      {
        id: '06',
        code: '06 // ESCALATORS',
        title: 'Эскалаторы',
        imgSrc: 'Escalator.jpg',
        size: 'half',
        details: {
          description: 'Ступенчатые подъемники с высокой пропускной способностью.',
          specs: ['Угол наклона: 30°', 'Пропускная способность: до 9000 чел/час'],
          gallery: ['/EscalatorType1.jpg', '/EscalatorType2.jpg']
        }
      },
      {
        id: '07',
        code: '07 // GENERATORS',
        title: 'Генераторы',
        imgSrc: 'generator.jpg',
        size: 'full',
        details: {
          description: 'Промышленные генераторные установки для бесперебойного питания.',
          specs: ['Мощность: до 2000 кВт', 'Автоматический запуск (АВР)'],
          gallery: ['/GeneratorType1.jpg', '/GeneratorType2.jpg']
        }
      }
    ]
  },
  en: {
    subtitle: "// PRODUCTS & EQUIPMENT",
    titlePart1: "Equipment ",
    titlePart2: "Catalog",
    description: "A full range of lifting mechanisms and backup power systems. Click on a category to see detailed specifications.",
    specTitle: "// Technical Specifications:",
    galleryTitle: "// Photo Gallery:",
    closeBtn: "Close",
    catalogItems: [
      {
        id: '01',
        code: '01 // PASSENGER',
        title: 'Passenger Elevators',
        imgSrc: '/Passeger.jpg',
        size: 'half',
        details: {
          description: 'Reliable and comfortable elevators for residential complexes, business centers, and office buildings.',
          specs: ['Capacity: from 320 to 1600 kg', 'Speed: from 1.0 to 4.0 m/s'],
          gallery: ['/PassegerType1.jpg', '/PassegerType2.jpg']
        }
      },
      {
        id: '02',
        code: '02 // PANORAMIC',
        title: 'Panoramic Elevators',
        imgSrc: '/Panoramic.jpg',
        size: 'half',
        details: {
          description: 'Aesthetic elevators with glass cabins. The perfect solution for shopping malls and hotels.',
          specs: ['Glazing: triplex', 'View: 360 degrees'],
          gallery: ['/PanoramicType1.jpg', '/PanoramicType2.jpg']
        }
      },
      {
        id: '03',
        code: '03 // FREIGHT',
        title: 'Freight Elevators',
        imgSrc: '/Freight.jpg',
        size: 'half',
        details: {
          description: 'Powerful equipment for warehouses and industrial facilities.',
          specs: ['Capacity: up to 5000 kg', 'Doors: reinforced'],
          gallery: ['/FreightType1.jpg', '/FreightType2.jpg']
        }
      },
      {
        id: '04',
        code: '04 // COTTAGE',
        title: 'Cottage Elevators',
        imgSrc: '/Cottage.jpg',
        size: 'half',
        details: {
          description: 'Compact and silent elevators for private homes.',
          specs: ['Power: 220V', 'Pit: from 100 mm'],
          gallery: ['/CottageType1.jpg', '/CottageType2.jpg']
        }
      },
      {
        id: '05',
        code: '05 // TRAVELATORS',
        title: 'Travelators',
        imgSrc: 'Travolatory.png',
        size: 'half',
        details: {
          description: 'Conveyors for comfortable movement of people with luggage.',
          specs: ['Inclination angle: up to 12°', 'Speed: 0.5 m/s'],
          gallery: ['/TravolatorType1.jpg', '/TravolatorType2.jpg']
        }
      },
      {
        id: '06',
        code: '06 // ESCALATORS',
        title: 'Escalators',
        imgSrc: 'Escalator.jpg',
        size: 'half',
        details: {
          description: 'Step lifts with high throughput capacity.',
          specs: ['Inclination angle: 30°', 'Throughput: up to 9000 people/hour'],
          gallery: ['/EscalatorType1.jpg', '/EscalatorType2.jpg']
        }
      },
      {
        id: '07',
        code: '07 // GENERATORS',
        title: 'Generators',
        imgSrc: 'generator.jpg',
        size: 'full',
        details: {
          description: 'Industrial generator sets for uninterruptible power supply.',
          specs: ['Power: up to 2000 kW', 'Automatic Transfer Switch (ATS)'],
          gallery: ['/GeneratorType1.jpg', '/GeneratorType2.jpg']
        }
      }
    ]
  }
};

export default function Catalog() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const { lang } = useLanguageStore();
  const t = translations[lang];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className={`body-font py-16 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-black text-slate-300' : 'bg-slate-50 text-slate-700'
    }`}>
      {/* Фоновое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container px-5 py-12 mx-auto flex flex-wrap relative z-10">

        {/* Шапка секции */}
        <div className={`flex w-full mb-12 flex-wrap items-end border-b pb-8 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}>
          <div className="lg:w-1/3 lg:mb-0 mb-4">
            <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-2">
              {t.subtitle}
            </span>
            <h1 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.titlePart1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{t.titlePart2}</span>
            </h1>
          </div>
          <p className={`lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base border-l-2 border-cyan-600/50 pl-4 ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            {t.description}
          </p>
        </div>

        {/* Сетка элементов каталога */}
        <div className="flex flex-wrap md:-m-2 -m-1 w-full">
          {t.catalogItems.map((item) => {
            const isFullWidth = item.size === 'full';
            return (
              <div
                key={item.id}
                className={`p-1 md:p-2 w-full ${isFullWidth ? '' : 'md:w-1/2'}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory(item)}
                  className={`w-full text-left relative h-full block group overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer ${
                    isDark 
                      ? 'border-zinc-800 hover:border-cyan-500/60 bg-zinc-950' 
                      : 'border-slate-200 hover:border-cyan-500/60 bg-white shadow-sm'
                  }`}
                >
                  <img
                    alt={item.title}
                    src={item.imgSrc}
                    className={`w-full object-cover object-center block group-hover:scale-105 group-hover:brightness-75 transition-all duration-700 ease-out ${isFullWidth ? 'h-48 md:h-72' : 'h-48 md:h-64'}`}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-black/90 via-black/30' : 'from-slate-950/80 via-slate-900/20'
                  } to-transparent p-5 flex flex-col justify-end`}>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1 opacity-90">
                      {item.code}
                    </span>
                    <h3 className={`text-white font-extrabold uppercase tracking-wider group-hover:text-cyan-400 transition-colors ${isFullWidth ? 'text-lg md:text-2xl' : 'text-sm sm:text-base'}`}>
                      {item.title}
                    </h3>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Модальное окно детализации */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">

          <div className={`relative rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border shadow-2xl ${
            isDark 
              ? 'bg-zinc-900 border-zinc-700 text-slate-200 shadow-[0_0_50px_rgba(6,182,212,0.15)]' 
              : 'bg-white border-slate-200 text-slate-800 shadow-2xl'
          }`}>

            <button
              onClick={() => setSelectedCategory(null)}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full transition-all flex items-center justify-center text-xl font-bold z-10 ${
                isDark 
                  ? 'bg-zinc-800 hover:bg-cyan-500 hover:text-black text-zinc-400' 
                  : 'bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-600'
              }`}
            >
              ✕
            </button>

            <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-1">
              {selectedCategory.code}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black uppercase mb-4 pr-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {selectedCategory.title}
            </h2>

            <p className={`text-sm sm:text-base mb-6 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
              {selectedCategory.details.description}
            </p>

            <div className={`mb-6 p-5 rounded-xl border ${
              isDark ? 'bg-black/40 border-zinc-800/80 text-zinc-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <h4 className="text-cyan-500 dark:text-cyan-400 font-mono text-xs uppercase mb-3 tracking-widest">
                {t.specTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {selectedCategory.details.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold mt-0.5">⯈</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-500 dark:text-cyan-400 font-mono text-xs uppercase mb-3 tracking-widest">
                {t.galleryTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedCategory.details.gallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${selectedCategory.title} ${idx + 1}`}
                    className={`w-full h-32 object-cover rounded-lg border transition-all hover:scale-[1.03] cursor-pointer ${
                      isDark ? 'border-zinc-800 hover:border-cyan-400/50' : 'border-slate-200 hover:border-cyan-500/50'
                    }`}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-5 border-t flex justify-end ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold uppercase text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}