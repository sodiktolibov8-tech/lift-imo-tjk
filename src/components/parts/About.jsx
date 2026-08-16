import React from 'react';
import { ShieldCheck, Cpu, Activity } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    aboutTag: "// ABOUT COMPANY",
    titlePrefix: "ООО «ИМО» — ",
    titleHighlight: "Надежность",
    titleSuffix: " на любой высоте",
    description: "Официальный поставщик и сервисная служба лифтового и эскалаторного оборудования в Таджикистане. Осуществляем полный комплекс инжиниринговых услуг для жилых комплексов, торговых центров и индустриальных объектов.",
    stats: [
      { label: 'Лет на рынке', code: 'EXP // 10Y' },
      { label: 'Установленных лифтов', code: 'UNITS // 500' },
      { label: 'Аварийная служба', code: 'SERVICE // ACTIVE' },
      { label: 'Гарантия безопасности', code: 'SAFETY // MAX' },
    ],
    features: [
      {
        title: 'Европейские стандарты',
        code: '01 // QUALITY',
        description: 'Поставляем только сертифицированное оборудование, соответствующее строгим международным нормам безопасности.',
      },
      {
        title: 'Полный цикл работ',
        code: '02 // PROCESS',
        description: 'От точного проектирования шахты и логистики до профессионального монтажа и финальной пусконаладки.',
      },
      {
        title: 'Круглосуточный сервис',
        code: '03 // MONITORING',
        description: 'Собственный диспетчерский центр 24/7 и мобильные инженерные бригады, готовые выехать мгновенно.',
      },
    ]
  },
  en: {
    aboutTag: "// ABOUT COMPANY",
    titlePrefix: "IMO LLC — ",
    titleHighlight: "Reliability",
    titleSuffix: " at any height",
    description: "Official supplier and service provider of elevator and escalator equipment in Tajikistan. We provide a full range of engineering services for residential complexes, shopping centers, and industrial facilities.",
    stats: [
      { label: 'Years on the market', code: 'EXP // 10Y' },
      { label: 'Installed elevators', code: 'UNITS // 500' },
      { label: 'Emergency service', code: 'SERVICE // ACTIVE' },
      { label: 'Safety guarantee', code: 'SAFETY // MAX' },
    ],
    features: [
      {
        title: 'European standards',
        code: '01 // QUALITY',
        description: 'We supply only certified equipment that meets strict international safety standards.',
      },
      {
        title: 'Full cycle of works',
        code: '02 // PROCESS',
        description: 'From precise shaft design and logistics to professional installation and final commissioning.',
      },
      {
        title: '24/7 Service',
        code: '03 // MONITORING',
        description: 'In-house 24/7 dispatch center and mobile engineering teams ready for immediate dispatch.',
      },
    ]
  }
};

const About = () => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const { lang } = useLanguageStore();
  const t = translations[lang];

  const statValues = ['10+', '500+', '24/7', '100%'];
  
  const stats = t.stats.map((stat, index) => ({
    ...stat,
    value: statValues[index]
  }));

  const featureIcons = [
    <ShieldCheck className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    <Cpu className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    <Activity className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
  ];

  const features = t.features.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index]
  }));

  return (
    <section className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${
      isDark ? 'bg-black text-slate-300' : 'bg-slate-50 text-slate-700'
    }`}>
      {/* Фоновое неоновое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">

        {/* Заголовок секции */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-2">
            {t.aboutTag}
          </span>
          <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t.titlePrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{t.titleHighlight}</span>{t.titleSuffix}
          </h2>
          <p className={`leading-relaxed text-sm md:text-base border-l-2 border-cyan-500 dark:border-cyan-400 pl-4 text-left md:text-center md:border-l-0 md:pl-0 ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            {t.description}
          </p>
        </div>

        {/* Сетка со статистикой (в стиле датчиков) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 relative group transition-all duration-300 overflow-hidden shadow-lg ${
                isDark 
                  ? 'bg-zinc-950/80 border-zinc-800 hover:border-cyan-500/60' 
                  : 'bg-white border-slate-200 hover:border-cyan-500/60 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                <span>{stat.code}</span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              </div>
              <div className={`text-3xl md:text-4xl font-black group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors tracking-tight mb-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Карточки преимуществ */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl p-8 transition-all duration-500 group relative shadow-lg ${
                isDark 
                  ? 'bg-zinc-950/60 border-zinc-800/80 hover:border-cyan-500/60 hover:bg-zinc-900/40' 
                  : 'bg-white border-slate-200 hover:border-cyan-500/60 hover:bg-slate-50 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 border rounded-lg flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all ${
                  isDark ? 'bg-zinc-900 border-blue-500/30' : 'bg-slate-100 border-blue-200'
                }`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest">
                  {item.code}
                </span>
              </div>

              <h3 className={`text-lg font-black uppercase tracking-wider mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {item.title}
              </h3>
              <p className={`text-xs sm:text-sm font-mono leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;