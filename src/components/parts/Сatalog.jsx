import React, { useState } from 'react';

const CATALOG_ITEMS = [
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
      gallery: ['/PanoramicType1.jpg','/PanoramicType2.jpg']
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
      gallery: ['/CottageType1.jpg','/CottageType2.jpg']
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
      gallery: ['/EscalatorType1.jpg','/EscalatorType2.jpg']
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
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="bg-black text-slate-300 body-font py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container px-5 py-12 mx-auto flex flex-wrap relative z-10">

        <div className="flex w-full mb-12 flex-wrap items-end border-b border-zinc-800 pb-8">
          <div className="lg:w-1/3 lg:mb-0 mb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              // PRODUCTS & EQUIPMENT
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Каталог <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Оборудования</span>
            </h1>
          </div>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base text-zinc-400 border-l-2 border-cyan-600/50 pl-4">
            Полный спектр подъемных механизмов и систем резервного питания. Нажмите на категорию, чтобы узнать подробные характеристики.
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1 w-full">
          {CATALOG_ITEMS.map((item) => {
            const isFullWidth = item.size === 'full';
            return (
              <div
                key={item.id}
                className={`p-1 md:p-2 w-full ${isFullWidth ? '' : 'md:w-1/2'}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory(item)}
                  className="w-full text-left relative h-full block group overflow-hidden rounded-xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-500 cursor-pointer"
                >
                  <img
                    alt={item.title}
                    src={item.imgSrc}
                    className={`w-full object-cover object-center block group-hover:scale-105 group-hover:brightness-75 transition-all duration-700 ease-out ${isFullWidth ? 'h-48 md:h-72' : 'h-48 md:h-64'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1 opacity-80 shadow-black">
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

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity">

          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-slate-200 shadow-[0_0_50px_rgba(6,182,212,0.15)]">

            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center text-xl font-bold text-zinc-400 z-10"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              {selectedCategory.code}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4 pr-10">
              {selectedCategory.title}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
              {selectedCategory.details.description}
            </p>

            <div className="mb-6 bg-black/40 p-5 rounded-xl border border-zinc-800/80">
              <h4 className="text-cyan-400 font-mono text-xs uppercase mb-3 tracking-widest">
                // Технические характеристики:
              </h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                {selectedCategory.details.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold mt-0.5">⯈</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-mono text-xs uppercase mb-3 tracking-widest">
                // Фотогалерея:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedCategory.details.gallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${selectedCategory.title} ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-lg border border-zinc-800 hover:border-cyan-400/50 transition-all hover:scale-[1.03] cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold uppercase text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                Закрыть
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}