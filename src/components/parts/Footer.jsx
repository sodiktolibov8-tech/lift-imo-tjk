import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    description: "Официальный поставщик и сервис лифтового оборудования в Таджикистане.",
    columns: {
      equipment: {
        title: "Оборудование",
        items: [
          { name: "Пассажирские лифты", path: "/catalog" },
          { name: "Грузовые лифты", path: "/catalog" },
          { name: "Эскалаторы", path: "/catalog" },
        ]
      },
      services: {
        title: "Услуги",
        items: [
          { name: "Монтаж и наладка", path: "/dispatch" },
          { name: "Сервисное обслуживание", path: "/dispatch" },
          { name: "Диспетчеризация 24/7", path: "/dispatch" },
        ]
      },
      company: {
        title: "Компания",
        items: [
          { name: "О нас", path: "/about" },
          { name: "Лицензии", path: "/about" },
          { name: "Контакты", path: "/contacts" },
        ]
      }
    },
    rights: "ALL RIGHTS RESERVED.",
    status: "SYSTEM STATUS: ONLINE"
  },
  en: {
    description: "Official supplier and service provider of elevator equipment in Tajikistan.",
    columns: {
      equipment: {
        title: "Equipment",
        items: [
          { name: "Passenger elevators", path: "/catalog" },
          { name: "Freight elevators", path: "/catalog" },
          { name: "Escalators", path: "/catalog" },
        ]
      },
      services: {
        title: "Services",
        items: [
          { name: "Installation & commissioning", path: "/dispatch" },
          { name: "Maintenance service", path: "/dispatch" },
          { name: "24/7 Dispatching", path: "/dispatch" },
        ]
      },
      company: {
        title: "Company",
        items: [
          { name: "About us", path: "/about" },
          { name: "Licenses", path: "/about" },
          { name: "Contacts", path: "/contacts" },
        ]
      }
    },
    rights: "ALL RIGHTS RESERVED.",
    status: "SYSTEM STATUS: ONLINE"
  }
};

const Footer = () => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const { lang } = useLanguageStore();
  const t = translations[lang];

  return (
    <footer className={`relative z-10 font-sans transition-colors duration-300 border-t ${
      isDark ? 'bg-black text-zinc-400 border-zinc-800' : 'bg-white text-slate-600 border-slate-200'
    }`}>
      
      {/* Верхняя тонкая неоновая полоска */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        {/* Блок с логотипом и описанием */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex items-center gap-3 justify-center md:justify-start group">
            <div className={`relative w-10 h-10 border rounded-lg flex items-center justify-center font-black text-lg tracking-tighter transition-all shadow-md ${
              isDark 
                ? 'bg-zinc-950 border-blue-500/50 text-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-cyan-400' 
                : 'bg-slate-100 border-blue-300 text-cyan-600 group-hover:border-cyan-500'
            }`}>
              <span>ИМО</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-black uppercase tracking-tight transition-colors ${
                isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'
              }`}>
                ООО «ИМО»
              </span>
              <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-500 tracking-widest uppercase">
                ELEVATOR // SYSTEMS
              </span>
            </div>
          </Link>
          <p className="mt-4 text-xs font-mono text-zinc-500 dark:text-zinc-500 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Навигационные колонки */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* Колонка 1: Оборудование */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              {t.columns.equipment.title}
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              {t.columns.equipment.items.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Колонка 2: Услуги */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              {t.columns.services.title}
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              {t.columns.services.items.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Колонка 3: Компания */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="font-mono text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              {t.columns.company.title}
            </h2>
            <nav className="list-none space-y-2.5 text-xs font-mono">
              {t.columns.company.items.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Нижняя полоса копирайта */}
      <div className={`border-t py-4 ${isDark ? 'border-zinc-900 bg-zinc-950/80' : 'border-slate-200 bg-slate-100'}`}>
        <div className="container mx-auto px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} ООО «ИМО». {t.rights}
          </p>
          <p className="mt-2 sm:mt-0 text-cyan-500">
            {t.status}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;