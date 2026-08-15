import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden py-24 lg:py-32 border-b border-blue-900/30">

      {/* 1. Агрессивная фон-сетка и мощное свечение */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Левая колонка: Дерзкий заголовок и кнопки */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Неоновый статус-бейдж */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Лифты &bull; Эскалаторы &bull; Диспетчеризация 24/7</span>
            </div>

            {/* Агрессивный крупный заголовок */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              Мощь. Надежность.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 drop-shadow-[0_0_35px_rgba(59,130,246,0.4)]">
                Высота.
              </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed border-l-2 border-blue-500 pl-4">
              Официальные поставки и круглосуточная аварийно-техническая служба ООО «ИМО» в Таджикистане. Бескомпромиссная безопасность ваших зданий.
            </p>

            {/* Дерзкие кнопки с неоновой тенью */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">


              <Link
                to="/catalog"
                className="w-full sm:w-auto px-9 py-4 bg-zinc-950 hover:bg-zinc-900 text-slate-200 font-extrabold uppercase tracking-wider text-sm rounded-lg border border-zinc-800 hover:border-blue-500/50 transition-all text-center"
              >
                Каталог техники
              </Link>
            </div>
          </div>

          {/* Правая колонка: Кибер-панель показателей */}
          <div className="lg:col-span-5">
            <div className="relative bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 rounded-xl p-6 sm:p-8 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]">

              {/* Верхняя панель карточки */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">ООО «ИМО»</h3>
                  <p className="text-xs font-mono text-cyan-400">TELEMETRY // SYSTEM ACTIVE</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded text-cyan-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  ONLINE
                </div>
              </div>

              {/* Хай-тек показатели */}
              <div className="space-y-4 font-mono">
                <div className="p-3.5 bg-black rounded border border-zinc-900 flex justify-between items-center hover:border-zinc-700 transition-colors">
                  <span className="text-xs text-zinc-500 uppercase">Реагирование:</span>
                  <span className="text-sm text-cyan-400 font-bold">&lt; 30 МИНУТ</span>
                </div>

                <div className="p-3.5 bg-black rounded border border-zinc-900 flex justify-between items-center hover:border-zinc-700 transition-colors">
                  <span className="text-xs text-zinc-500 uppercase">Гарантийный срок:</span>
                  <span className="text-sm text-blue-400 font-bold">5 ЛЕТ (60 МЕС)</span>
                </div>

                <div className="p-3.5 bg-black rounded border border-zinc-900 flex justify-between items-center hover:border-zinc-700 transition-colors">
                  <span className="text-xs text-zinc-500 uppercase">Сертификат ГОСТ/ISO:</span>
                  <span className="text-sm text-emerald-400 font-bold">PASSED / 100%</span>
                </div>
              </div>

              {/* Нижняя полоса */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-xs font-mono text-zinc-600">
                <span>STATUS: 200 OK</span>
                <span className="text-blue-500">DUSHANBE / TJ</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;