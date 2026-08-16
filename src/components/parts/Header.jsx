import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Layers, Activity, FolderGit2, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    companySub: "ELEVATOR // SYSTEMS",
    menuItems: [
      { title: 'Главная', path: '/' },
      { title: 'Каталог', path: '/catalog' },
      { title: 'Диспетчеризация', path: '/dispatch' },
      { title: 'Наши проекты', path: '/projects' },
    ]
  },
  en: {
    companySub: "ELEVATOR // SYSTEMS",
    menuItems: [
      { title: 'Home', path: '/' },
      { title: 'Catalog', path: '/catalog' },
      { title: 'Dispatching', path: '/dispatch' },
      { title: 'Our Projects', path: '/projects' },
    ]
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Подключаем Zustand сторы для темы и языка
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  const { lang, setLang } = useLanguageStore();
  const t = translations[lang];

  const menuIcons = [
    <Home className="w-4 h-4 text-cyan-400" />,
    <Layers className="w-4 h-4 text-cyan-400" />,
    <Activity className="w-4 h-4 text-cyan-400" />,
    <FolderGit2 className="w-4 h-4 text-cyan-400" />
  ];

  const menuItems = t.menuItems.map((item, index) => ({
    ...item,
    icon: menuIcons[index]
  }));

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-black/80 border-zinc-900 text-slate-300' 
        : 'bg-white/80 border-slate-200 text-slate-700'
    }`}>
      <div className="container mx-auto px-4 sm:px-5 h-20 flex items-center justify-between">

        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group select-none">
          <div className="bg-cyan-500 text-black font-black px-2.5 sm:px-3 py-1.5 rounded text-base sm:text-lg tracking-wider">
            ИМО
          </div>
          <div>
            <span className={`font-bold tracking-widest block text-xs sm:text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>ООО «ИМО»</span>
            <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 tracking-wider">ELEVATOR // SYSTEMS</span>
          </div>
        </Link>

        {/* Правая часть: Телефон, Смена языка, Кнопка темы и меню */}
        <div className="flex items-center gap-2 sm:gap-3" ref={menuRef}>
          
          {/* Кнопка телефона */}
          <a
            href="tel:+992934443703"
            className="hidden sm:inline-flex relative items-center justify-center px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg overflow-hidden group hover:bg-cyan-500 hover:text-black active:bg-cyan-500 active:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-black group-active:bg-black transition-colors animate-pulse"></span>
              +992 93 444 37 03
            </span>
          </a>

          {/* Переключатель языка (RU / EN) */}
          <div className={`flex items-center border rounded-xl p-1 gap-1 transition-colors ${
            isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setLang('ru')}
              className={`px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                lang === 'ru' 
                  ? 'bg-cyan-500 text-black shadow-md' 
                  : isDark ? 'text-zinc-400 hover:text-white active:text-white' : 'text-slate-500 hover:text-slate-900 active:text-slate-900'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                lang === 'en' 
                  ? 'bg-cyan-500 text-black shadow-md' 
                  : isDark ? 'text-zinc-400 hover:text-white active:text-white' : 'text-slate-500 hover:text-slate-900 active:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Кнопка смены темы */}
          <button
            onClick={toggleTheme}
            className={`p-2 sm:p-2.5 border rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer ${
              isDark 
                ? 'bg-zinc-900/80 border-zinc-800 text-yellow-400 hover:border-yellow-400/50 active:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]' 
                : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-cyan-500/50 active:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            }`}
            title="Сменить тему"
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />}
          </button>

          {/* Кнопка меню (гамбургер) */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 sm:p-2.5 border rounded-xl transition-all flex items-center justify-center shadow-lg cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900/80 border-zinc-800 hover:border-cyan-500/50 active:border-cyan-500/50 text-white' 
                  : 'bg-slate-100 border-slate-200 hover:border-cyan-500/50 active:border-cyan-500/50 text-slate-900'
              }`}
            >
              {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />}
            </button>

            {/* Выпадающий список */}
            {isOpen && (
              <div className={`absolute right-0 mt-3 w-56 backdrop-blur-xl border rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
                isDark 
                  ? 'bg-zinc-950/95 border-zinc-800' 
                  : 'bg-white/95 border-slate-200'
              }`}>
                <div className="flex flex-col space-y-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isDark 
                          ? 'text-zinc-300 hover:text-white active:text-white hover:bg-zinc-900/80 active:bg-zinc-900/80' 
                          : 'text-slate-600 hover:text-slate-900 active:text-slate-900 hover:bg-slate-100 active:bg-slate-100'
                      }`}
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