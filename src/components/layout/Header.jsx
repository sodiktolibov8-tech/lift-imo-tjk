import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Оборудование', href: '#services' },
    { name: 'О компании', href: '#about' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Логотип */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
              ИМО
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg tracking-wide leading-none">ООО «ИМО»</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-1">Лифты & Эскалаторы</span>
            </div>
          </a>

          {/* Навигация (Десктоп) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Кнопка вызова и телефон (Десктоп) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2.5 text-slate-300 text-sm">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold">+992 93 444 37 03</span>
            </div>
            
            <a
              href="#contacts"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              Заказать звонок
            </a>
          </div>

          {/* Кнопка гамбургер-меню (Мобильные) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="font-semibold">+992 93 444 37 03</span>
            </div>
            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-3 rounded-xl transition-all"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      )}
    </header>
  );
}