import React from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    sectionTag: "// 24/7 MONITORING & CONTROL",
    titleMain: "Системы",
    titleHighlight: "Диспетчеризации",
    subtitle: "Полный контроль над работой каждого лифта и эскалатора в реальном времени. Предотвращение поломок до их возникновения и мгновенное реагирование на нештатные ситуации.",
    contentTitle: "Интеллектуальный контроль безопасности",
    contentDescription: "Современные системы диспетчеризации объединяют все инженерные сети здания в единый центр управления. Диспетчер видит статус оборудования, параметры движения кабины и сигналы тревоги в режиме онлайн.",
    features: [
      {
        title: "Круглосуточный мониторинг",
        description: "Постоянный сбор телеметрии и диагностика узлов лифтового оборудования 365 дней в году."
      },
      {
        title: "Быстрое реагирование",
        description: "Автоматическая передача аварийных сигналов и вызов технической бригады при сбоях."
      },
      {
        title: "Голосовая связь",
        description: "Прямая двухсторонняя переговорная связь между пассажиром в кабине и оператором диспетчерской."
      }
    ],
    videoNote: "*Видео-обзор устройства и работы лифтовых систем.",
    videoFallback: "Ваш браузер не поддерживает видеоэлемент."
  },
  en: {
    sectionTag: "// 24/7 MONITORING & CONTROL",
    titleMain: "Dispatch",
    titleHighlight: "Systems",
    subtitle: "Full real-time control over the operation of every elevator and escalator. Preventing failures before they occur and immediate response to emergency situations.",
    contentTitle: "Intelligent Safety Control",
    contentDescription: "Modern dispatch systems integrate all building engineering networks into a single control center. The dispatcher monitors equipment status, car movement parameters, and alarm signals online.",
    features: [
      {
        title: "24/7 Monitoring",
        description: "Continuous telemetry collection and diagnostics of elevator equipment components 365 days a year."
      },
      {
        title: "Rapid Response",
        description: "Automatic transmission of emergency signals and dispatching of a technical team in case of failures."
      },
      {
        title: "Voice Communication",
        description: "Direct two-way intercom connection between the passenger in the car and the dispatch operator."
      }
    ],
    videoNote: "*Video review of the device and operation of elevator systems.",
    videoFallback: "Your browser does not support the video element."
  }
};

export default function Dispatch() {
    const { theme } = useThemeStore();
    const isDark = theme === 'dark';

    const { lang } = useLanguageStore();
    const t = translations[lang];

    return (
        <section className={`transition-colors duration-300 body-font py-16 relative overflow-hidden ${isDark ? 'bg-black text-slate-300' : 'bg-slate-50 text-slate-700'}`}>
            {/* Фоновое неоновое свечение */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-5 py-12 mx-auto flex flex-wrap relative z-10">

                {/* Заголовок секции */}
                <div className={`flex w-full mb-12 flex-wrap items-end border-b pb-8 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}>
                    <div className="lg:w-1/3 lg:mb-0 mb-4">
                        <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-2">
                            {t.sectionTag}
                        </span>
                        <h1 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{t.titleHighlight}</span>
                        </h1>
                    </div>
                    <p className={`lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base border-l-2 border-cyan-600/50 pl-4 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                        {t.subtitle}
                    </p>
                </div>

                {/* Основной контент: текст слева, видео справа */}
                <div className="flex flex-wrap items-center justify-between w-full gap-8 lg:gap-0">

                    {/* Текстовый блок с преимуществами */}
                    <div className="lg:w-1/2 w-full lg:pr-10">
                        <h3 className={`text-xl sm:text-2xl font-extrabold uppercase mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {t.contentTitle}
                        </h3>
                        <p className={`text-sm sm:text-base mb-6 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                            {t.contentDescription}
                        </p>

                        <div className="space-y-4">
                            {t.features.map((feature, index) => (
                                <div key={index} className={`border p-4 rounded-xl flex items-start gap-4 transition-colors ${isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                    <span className="text-cyan-500 dark:text-cyan-400 font-mono text-lg font-bold">0{index + 1}</span>
                                    <div>
                                        <h4 className={`font-bold uppercase text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h4>
                                        <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Блок с локальным видео */}
                    <div className="lg:w-1/2 w-full">
                        <div className={`relative rounded-2xl overflow-hidden border shadow-[0_0_30px_rgba(6,182,212,0.15)] ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'}`}>
                            <div className={`absolute top-3 left-3 z-20 backdrop-blur-md px-3 py-1 rounded border ${isDark ? 'bg-black/70 border-zinc-800' : 'bg-white/80 border-slate-200'}`}>
                                <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                    ELEVATOR SYSTEMS // PROMO
                                </span>
                            </div>

                            <div className="relative w-full pt-[56.25%]">
                                <video
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src="/video.mp4"
                                    autoPlay    
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    {t.videoFallback}
                                </video>
                            </div>
                        </div>
                        <p className={`text-xs font-mono mt-3 text-center ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                            {t.videoNote}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}