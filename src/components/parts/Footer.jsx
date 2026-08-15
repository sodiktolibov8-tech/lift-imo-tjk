import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-800 relative z-10 font-sans">
      
      {/* Верхняя тонкая неоновая полоска */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        {/* Блок с логотипом и описанием */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex items-center gap-3 justify-center md:justify-start group">
            <div className="relative w-10 h-10 bg-zinc-950 border border-blue-500/50 rounded-lg flex items-center justify-center text-cyan-400 font-black text-lg tracking-tighter shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-cyan-400 transition-all">
              <span>ИМО</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                ООО «ИМО»
              </span>
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">
                ELEVATOR // SYSTEMS
              </span>
            </div>
          </Link>
          <p className="mt-4 text-xs font-mono text-zinc-500 leading-relaxed">
            Официальный поставщик и сервис лифтового оборудования в Таджикистане.
          </p>
        </div>

        {/* Навигационные колонки */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* Колонка 1 */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              Оборудование
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/catalog" className="hover:text-cyan-400 transition-colors">
                  Пассажирские лифты
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-cyan-400 transition-colors">
                  Грузовые лифты
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-cyan-400 transition-colors">
                  Эскалаторы
                </Link>
              </li>
            </nav>
          </div>

          {/* Колонка 2 */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              Услуги
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/dispatch" className="hover:text-cyan-400 transition-colors">
                  Монтаж и наладка
                </Link>
              </li>
              <li>
                <Link to="/dispatch" className="hover:text-cyan-400 transition-colors">
                  Сервисное обслуживание
                </Link>
              </li>
              <li>
                <Link to="/dispatch" className="hover:text-cyan-400 transition-colors">
                  Диспетчеризация 24/7
                </Link>
              </li>
            </nav>
          </div>

          {/* Колонка 3 */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              Компания
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  Лицензии
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-cyan-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </nav>
          </div>

        </div>
      </div>

      {/* Нижняя полоса копирайта */}
      <div className="border-t border-zinc-900 bg-zinc-950/80 py-4">
        <div className="container mx-auto px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} ООО «ИМО». ALL RIGHTS RESERVED.
          </p>
          <p className="mt-2 sm:mt-0 text-cyan-500/80">
            SYSTEM STATUS: ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;