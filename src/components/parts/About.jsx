import React from 'react';
import { ShieldCheck, Cpu, Activity } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Лет на рынке', code: 'EXP // 10Y' },
    { value: '500+', label: 'Установленных лифтов', code: 'UNITS // 500' },
    { value: '24/7', label: 'Аварийная служба', code: 'SERVICE // ACTIVE' },
    { value: '100%', label: 'Гарантия безопасности', code: 'SAFETY // MAX' },
  ];

  const features = [
    {
      title: 'Европейские стандарты',
      code: '01 // QUALITY',
      description: 'Поставляем только сертифицированное оборудование, соответствующее строгим международным нормам безопасности.',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'Полный цикл работ',
      code: '02 // PROCESS',
      description: 'От точного проектирования шахты и логистики до профессионального монтажа и финальной пусконаладки.',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'Круглосуточный сервис',
      code: '03 // MONITORING',
      description: 'Собственный диспетчерский центр 24/7 и мобильные инженерные бригады, готовые выехать мгновенно.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-24 bg-black text-slate-300 relative overflow-hidden font-sans">
      {/* Фоновое неоновое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">

        {/* Заголовок секции */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            // ABOUT COMPANY
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-6">
            ООО «ИМО» — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Надежность</span> на любой высоте
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-cyan-400 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            Официальный поставщик и сервисная служба лифтового и эскалаторного оборудования в Таджикистане. Осуществляем полный комплекс инжиниринговых услуг для жилых комплексов, торговых центров и индустриальных объектов.
          </p>
        </div>

        {/* Сетка со статистикой (в стиле датчиков) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-950/80 border border-zinc-800 hover:border-cyan-500/60 rounded-xl p-6 relative group transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                <span>{stat.code}</span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              </div>
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-zinc-400">
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
              className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-8 hover:border-cyan-500/60 hover:bg-zinc-900/40 transition-all duration-500 group relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-zinc-900 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest">
                  {item.code}
                </span>
              </div>

              <h3 className="text-lg font-black uppercase tracking-wider text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-mono leading-relaxed">
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