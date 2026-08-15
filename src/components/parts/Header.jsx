import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // Агрессивная подсветка активной ссылки с неоновым свечением
  const getLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-cyan-400 font-extrabold uppercase tracking-wider text-sm transition-all drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] border-b-2 border-cyan-400 pb-1'
      : 'text-zinc-400 hover:text-white font-bold uppercase tracking-wider text-sm transition-all pb-1 hover:border-b-2 hover:border-zinc-500';

  return (
    <header className="bg-black text-slate-200 border-b border-zinc-800 relative z-50">

      {/* Тонкая неоновая полоска сверху */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"></div>

      <div className="container mx-auto flex flex-wrap p-4 sm:p-5 flex-col md:flex-row items-center justify-between">

        {/* Агрессивный логотип */}
        <Link to="/" className="flex items-center gap-3 mb-4 md:mb-0 group">
          <div className="relative w-11 h-11 bg-zinc-950 border border-blue-500/50 rounded-lg flex items-center justify-center text-cyan-400 font-black text-xl tracking-tighter shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
            <span className="relative z-10">ИМО</span>
            <span className="absolute inset-0 bg-blue-600/10 rounded-lg blur-xs"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              ООО «ИМО»
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              ELEVATOR // SYSTEMS
            </span>
          </div>
        </Link>

        {/* Навигация */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-mono">
          <NavLink to="/about" className={getLinkStyle}>
            О компании
          </NavLink>
          <NavLink to="/catalog" className={getLinkStyle}>
            Каталог
          </NavLink>
          <NavLink to="/dispatch" className={getLinkStyle}>
            Диспетчеризация
          </NavLink>
          <NavLink to="/projects" className={getLinkStyle}>
            Проекты
          </NavLink>
        </nav>

        {/* Оригинальная Cyber-кнопка «Связаться» со сканером и индикатором */}
        <Link
          to="/contacts"
          className="relative mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-mono font-bold text-xs uppercase tracking-widest text-cyan-400 bg-zinc-950 border border-cyan-500/50 rounded-lg group hover:border-cyan-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          {/* Анимация бегущего блика */}
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

          {/* Зеленая пульсирующая точка (индикатор онлайн) */}
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <span className="relative z-10">Связаться</span>

          {/* Стрелка с эффектом сдвига */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform text-cyan-400 group-hover:text-white"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>

      </div>
    </header>
  );
};

export default Header;