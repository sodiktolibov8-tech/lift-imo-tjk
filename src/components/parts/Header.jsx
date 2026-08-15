import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Layers, Activity, FolderGit2 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { title: 'Главная', path: '/', icon: <Home className="w-4 h-4 text-cyan-400" /> },
    { title: 'Каталог', path: '/catalog', icon: <Layers className="w-4 h-4 text-cyan-400" /> },
    { title: 'Диспетчеризация', path: '/dispatch', icon: <Activity className="w-4 h-4 text-cyan-400" /> },
    { title: 'Наши проекты', path: '/projects', icon: <FolderGit2 className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-5 h-20 flex items-center justify-between">

        {/* Логотип */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black px-3 py-1.5 rounded text-lg tracking-wider">
            ИМО
          </div>
          <div>
            <span className="text-white font-bold tracking-widest block text-sm">ООО «ИМО»</span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider">ELEVATOR // SYSTEMS</span>
          </div>
        </Link>

        {/* Правая часть: Кнопка телефона и выпадающее меню рядом */}
        <div className="flex items-center gap-3" ref={menuRef}>
          <a
            href="tel:+992 93 444 37 03"
            className="hidden sm:inline-flex relative items-center justify-center px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg overflow-hidden group hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-black transition-colors animate-pulse"></span>
              +992 93 444 37 03
            </span>
          </a>

          {/* Кнопка меню (гамбургер) */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 rounded-xl text-white transition-all flex items-center justify-center shadow-lg"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
            </button>

            {/* Выпадающий список */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col space-y-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/80 transition-colors"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}