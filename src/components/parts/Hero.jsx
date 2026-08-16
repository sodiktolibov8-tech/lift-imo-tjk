import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    statusBadge: "Лифты • Эскалаторы • Диспетчеризация 24/7",
    titlePrefix: "Мощь. Надежность. ",
    titleHighlight: "Высота.",
    description: "Официальные поставки и круглосуточная аварийно-техническая служба ООО «ИМО» в Таджикистане. Бескомпромиссная безопасность ваших зданий.",
    catalogButton: "Каталог техники",
    cardTitle: "ООО «ИМО»",
    telemetry: "TELEMETRY // SYSTEM ACTIVE",
    online: "ONLINE",
    metrics: [
      { label: "Реагирование:", value: "< 30 МИНУТ" },
      { label: "Гарантийный срок:", value: "5 ЛЕТ (60 МЕС)" },
      { label: "Сертификат ГОСТ/ISO:", value: "PASSED / 100%" }
    ],
    status: "STATUS: 200 OK",
    location: "DUSHANBE / TJ"
  },
  en: {
    statusBadge: "Elevators • Escalators • 24/7 Dispatching",
    titlePrefix: "Power. Reliability. ",
    titleHighlight: "Height.",
    description: "Official supplies and 24/7 emergency-technical service of IMO LLC in Tajikistan. Uncompromising safety for your buildings.",
    catalogButton: "Equipment Catalog",
    cardTitle: "IMO LLC",
    telemetry: "TELEMETRY // SYSTEM ACTIVE",
    online: "ONLINE",
    metrics: [
      { label: "Response time:", value: "< 30 MIN" },
      { label: "Warranty period:", value: "5 YEARS (60 MO)" },
      { label: "GOST/ISO Certificate:", value: "PASSED / 100%" }
    ],
    status: "STATUS: 200 OK",
    location: "DUSHANBE / TJ"
  }
};

const Hero = () => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const { lang } = useLanguageStore();
  const t = translations[lang];

  return (
    <section className={`relative overflow-hidden py-24 lg:py-32 border-b transition-colors duration-300 ${
      isDark ? 'bg-black text-white border-blue-900/30' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>

      {/* 1. Агрессивная фон-сетка и мощное свечение */}
      <div className={`absolute inset-0 bg-[size:4rem_4rem] ${
        isDark 
          ? 'bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(to_right,#cbd5e133_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e133_1px,transparent_1px)]'
      }`}></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Левая колонка: Дерзкий заголовок и кнопки */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Неоновый статус-бейдж */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-md font-mono text-xs uppercase tracking-widest mb-6 shadow-md ${
              isDark 
                ? 'bg-blue-950/60 border border-blue-500/40 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                : 'bg-blue-50 border border-blue-300 text-blue-600'
            }`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>{t.statusBadge}</span>
            </div>

            {/* Агрессивный крупный заголовок */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              {t.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 drop-shadow-[0_0_35px_rgba(59,130,246,0.4)]">
                {t.titleHighlight}
              </span>
            </h1>

            <p className={`text-lg sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed border-l-2 border-blue-500 pl-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.description}
            </p>

            {/* Дерзкие кнопки с неоновой тенью */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/catalog"
                className={`w-full sm:w-auto px-9 py-4 font-extrabold uppercase tracking-wider text-sm rounded-lg border transition-all text-center shadow-lg ${
                  isDark 
                    ? 'bg-zinc-950 hover:bg-zinc-900 text-slate-200 border-zinc-800 hover:border-blue-500/50' 
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 hover:border-blue-500/50'
                }`}
              >
                {t.catalogButton}
              </Link>
            </div>
          </div>

          {/* Правая колонка: Кибер-панель показателей */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-xl p-6 sm:p-8 transition-all duration-500 shadow-2xl ${
              isDark 
                ? 'bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]' 
                : 'bg-white border border-slate-200 hover:border-blue-500/50 shadow-xl'
            }`}>

              {/* Верхняя панель карточки */}
              <div className={`flex items-center justify-between border-b pb-4 mb-6 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}>
                <div>
                  <h3 className={`text-xl font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.cardTitle}</h3>
                  <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400">{t.telemetry}</p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded font-mono text-xs ${
                  isDark ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400' : 'bg-cyan-50 border border-cyan-300 text-cyan-700'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {t.online}
                </div>
              </div>

              {/* Хай-тек показатели */}
              <div className="space-y-4 font-mono">
                {t.metrics.map((metric, index) => {
                  const colors = [
                    'text-cyan-500 dark:text-cyan-400',
                    'text-blue-500 dark:text-blue-400',
                    'text-emerald-500 dark:text-emerald-400'
                  ];
                  return (
                    <div key={index} className={`p-3.5 rounded border flex justify-between items-center transition-colors ${
                      isDark ? 'bg-black border-zinc-900 hover:border-zinc-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}>
                      <span className={`text-xs uppercase ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{metric.label}</span>
                      <span className={`text-sm font-bold ${colors[index]}`}>{metric.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Нижняя полоса */}
              <div className={`mt-6 pt-4 border-t flex justify-between items-center text-xs font-mono ${
                isDark ? 'border-zinc-900 text-zinc-600' : 'border-slate-200 text-slate-400'
              }`}>
                <span>{t.status}</span>
                <span className="text-blue-500">{t.location}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;