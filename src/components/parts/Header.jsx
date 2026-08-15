import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-5 h-20 flex items-center justify-between">

        {/* Логотип */}
        <a href="#" className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black px-3 py-1.5 rounded text-lg tracking-wider">
            ИМО
          </div>
          <div>
            <span className="text-white font-bold tracking-widest block text-sm">ООО «ИМО»</span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider">ELEVATOR // SYSTEMS</span>
          </div>
        </a>

        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">О компании</a>
          <a href="#catalog" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">Каталог</a>
          <a href="#dispatch" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">Диспетчеризация</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">Наши проекты</a>
        </nav>

        {/* Кнопка с официальным номером телефона (замените цифры на ваш реальный номер) */}
        <a
          href="tel:+992 93 444 37 03"
          className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg overflow-hidden group hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="relative flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-black transition-colors animate-pulse"></span>
            +992 93 444 37 03
          </span>
        </a>

      </div>
    </header>
  );
}