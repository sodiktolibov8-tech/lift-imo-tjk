import React, { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const translations = {
  ru: {
    subtitle: "// TRUSTED PARTNERS & KEY CLIENTS",
    titlePart1: "Наши ",
    titlePart2: "Проекты",
    description: "Реализованные поставки оборудования, монтаж и техническое обслуживание на ведущих государственных, дипломатических и коммерческих объектах страны.",
    hint: "💡 Нажмите на любую карточку, чтобы узнать подробности",
    locationLabel: "ЛОКАЦИЯ:",
    modalWorks: "Выполненные работы:",
    closeBtn: "Закрыть",
    projectsList: [
      {
        name: "Қасри Миллат",
        category: "Дворец Нации (Резиденция Президента)",
        location: "Душанбе",
        image: "/project-kasri-millat.jpg",
        description: "Главный государственный объект страны, символ независимости и суверенитета Республики Таджикистан.",
        details: "Выполнен комплекс работ по поставке специализированного инженерного оборудования, пусконаладке и техническому сопровождению систем жизнеобеспечения."
      },
      {
        name: "United States Embassy",
        category: "Дипломатический объект",
        location: "Душанбе",
        image: "/project-us-embassy.jpg",
        description: "Современный дипломатический комплекс, отвечающий самым строгим международным стандартам безопасности.",
        details: "Осуществлена поставка и монтаж высокотехнологичных систем безопасности, климатического контроля и бесперебойного энергоснабжения."
      },
      {
        name: "Crocus Fitness",
        category: "Фитнес-центр премиум-класса",
        location: "Душанбе",
        image: "/crocus-fitness.jpg",
        description: "Флагманский спортивный клуб с передовыми тренировочными зонами, бассейном и спа-комплексом.",
        details: "Проектирование, поставка и монтаж систем вентиляции, кондиционирования воздуха и специализированного оборудования для бассейнов."
      },
      {
        name: "Dushanbe Serena Hotel",
        category: "Гостиничный комплекс",
        location: "Душанбе",
        image: "/project-serena.jpg",
        description: "Пятизвездочный отель международной сети, предлагающий сервис высочайшего уровня для гостей столицы.",
        details: "Комплексное оснащение инженерными системами систем кондиционирования, автоматизации и контроля доступа."
      },
      {
        name: "Посольство Ирана",
        category: "Дипломатический объект",
        location: "Душанбе",
        image: "/project-iran.jpg",
        description: "Дипломатическая миссия с развитой инфраструктурой административных и представительских зданий.",
        details: "Поставка оборудования и техническое обслуживание внутренних инженерных сетей и систем безопасности."
      },
      {
        name: "Rudaki Plaza",
        category: "Бизнес-центр класса А",
        location: "Душанбе",
        image: "/project-rudaki.jpg",
        description: "Крупнейший деловой центр в сердце Душанбе, объединяющий офисы ведущих международных и местных компаний.",
        details: "Интеграция систем интеллектуального управления зданием (BMS), вентиляции и распределения электроэнергии."
      },
      {
        name: "Элит-Строй-Сервис",
        category: "Строительный партнер",
        location: "Душанбе",
        image: "/project-elit.jpg",
        description: "Ведущая компания в сфере гражданского и коммерческого строительства жилых и административных комплексов.",
        details: "Поставка строительного и инженерного оборудования для крупных инфраструктурных проектов."
      },
      {
        name: "Diar Dushanbe",
        category: "Многофункциональный комплекс",
        location: "Душанбе",
        image: "/project-diar.jpg",
        description: "Первый проект класса «люкс» смешанного использования на берегу живописного озера в Душанбе.",
        details: "Монтаж и пусконаладка комплексных инженерных систем для жилых и коммерческих зон комплекса."
      },
      {
        name: "Сангтудинская ГЭС-1",
        category: "Промышленный энергетический объект",
        location: "Таджикистан",
        image: "/project-sangtuda.jpg",
        description: "Ключевой объект энергетической инфраструктуры страны, обеспечивающий стабильную выработку электроэнергии.",
        details: "Поставка специализированного промышленного оборудования и техническая поддержка производственных процессов."
      },
      {
        name: "Посольство Индии",
        category: "Дипломатический объект",
        location: "Душанбе",
        image: "/project-india.jpg",
        description: "Дипломатическое представительство Республики Индия с современными административными корпусами.",
        details: "Комплексное техническое оснащение зданий посольства и систем жизнеобеспечения."
      },
      {
        name: "Hyatt Regency",
        category: "Международный отельный комплекс",
        location: "Душанбе",
        image: "/project-hyatt.jpg",
        description: "Роскошный пятизвездочный отель на берегу реки Варзоб с развитой инфраструктурой для отдыха и бизнеса.",
        details: "Поставка и обслуживание климатического оборудования, систем кондиционирования и автоматизации."
      }
    ]
  },
  en: {
    subtitle: "// TRUSTED PARTNERS & KEY CLIENTS",
    titlePart1: "Our ",
    titlePart2: "Projects",
    description: "Completed equipment supplies, installation, and maintenance at leading government, diplomatic, and commercial facilities in the country.",
    hint: "💡 Click on any card to learn details",
    locationLabel: "LOCATION:",
    modalWorks: "Completed works:",
    closeBtn: "Close",
    projectsList: [
      {
        name: "Қасри Миллат",
        category: "Palace of Nations (Presidential Residence)",
        location: "Dushanbe",
        image: "/project-kasri-millat.jpg",
        description: "The main state facility of the country, a symbol of independence and sovereignty of the Republic of Tajikistan.",
        details: "A complex of works was performed on the supply of specialized engineering equipment, commissioning, and technical support of life support systems."
      },
      {
        name: "United States Embassy",
        category: "Diplomatic Facility",
        location: "Dushanbe",
        image: "/project-us-embassy.jpg",
        description: "A modern diplomatic complex meeting the strictest international security standards.",
        details: "Supply and installation of high-tech security systems, climate control, and uninterrupted power supply were carried out."
      },
      {
        name: "Crocus Fitness",
        category: "Premium Fitness Center",
        location: "Dushanbe",
        image: "/crocus-fitness.jpg",
        description: "Flagship sports club with advanced training zones, swimming pool, and spa complex.",
        details: "Design, supply, and installation of ventilation systems, air conditioning, and specialized pool equipment."
      },
      {
        name: "Dushanbe Serena Hotel",
        category: "Hotel Complex",
        location: "Dushanbe",
        image: "/project-serena.jpg",
        description: "Five-star international chain hotel offering top-level service for guests of the capital.",
        details: "Comprehensive engineering equipment outfitting for air conditioning, automation, and access control systems."
      },
      {
        name: "Embassy of Iran",
        category: "Diplomatic Facility",
        location: "Dushanbe",
        image: "/project-iran.jpg",
        description: "Diplomatic mission with developed infrastructure of administrative and representative buildings.",
        details: "Equipment supply and technical maintenance of internal engineering networks and security systems."
      },
      {
        name: "Rudaki Plaza",
        category: "Class A Business Center",
        location: "Dushanbe",
        image: "/project-rudaki.jpg",
        description: "The largest business center in the heart of Dushanbe, uniting offices of leading international and local companies.",
        details: "Integration of Building Management Systems (BMS), ventilation, and power distribution."
      },
      {
        name: "Elit-Stroy-Servis",
        category: "Construction Partner",
        location: "Dushanbe",
        image: "/project-elit.jpg",
        description: "Leading company in the field of civil and commercial construction of residential and administrative complexes.",
        details: "Supply of construction and engineering equipment for major infrastructure projects."
      },
      {
        name: "Diar Dushanbe",
        category: "Multifunctional Complex",
        location: "Dushanbe",
        image: "/project-diar.jpg",
        description: "The first luxury mixed-use project on the shore of a picturesque lake in Dushanbe.",
        details: "Installation and commissioning of comprehensive engineering systems for residential and commercial zones of the complex."
      },
      {
        name: "Sangtuda HPP-1",
        category: "Industrial Energy Facility",
        location: "Tajikistan",
        image: "/project-sangtuda.jpg",
        description: "A key energy infrastructure facility of the country ensuring stable electricity generation.",
        details: "Supply of specialized industrial equipment and technical support for production processes."
      },
      {
        name: "Embassy of India",
        category: "Diplomatic Facility",
        location: "Dushanbe",
        image: "/project-india.jpg",
        description: "Diplomatic mission of the Republic of India with modern administrative buildings.",
        details: "Comprehensive technical outfitting of the embassy buildings and life support systems."
      },
      {
        name: "Hyatt Regency",
        category: "International Hotel Complex",
        location: "Dushanbe",
        image: "/project-hyatt.jpg",
        description: "Luxurious five-star hotel on the bank of the Varzob river with developed infrastructure for recreation and business.",
        details: "Supply and maintenance of climate equipment, air conditioning, and automation systems."
      }
    ]
  }
};

export default function Projects() {
    const { theme } = useThemeStore();
    const isDark = theme === 'dark';

    const { lang } = useLanguageStore();
    const t = translations[lang];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className={`body-font py-20 relative overflow-hidden transition-colors duration-300 ${
            isDark ? 'bg-black text-slate-300' : 'bg-slate-50 text-slate-700'
        }`}>
            {/* Фоновое неоновое свечение */}
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-5 py-12 mx-auto relative z-10">

                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-2">
                        {t.subtitle}
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {t.titlePart1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{t.titlePart2}</span>
                    </h2>
                    <p className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                        {t.description}
                    </p>
                    <p className="text-xs text-cyan-500 font-mono mt-2">{t.hint}</p>
                </div>

                {/* Сетка проектов */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.projectsList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(item)}
                            className={`rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 cursor-pointer shadow-lg ${
                                isDark 
                                    ? 'bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]' 
                                    : 'bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-xl'
                            }`}
                        >
                            {/* Блок с изображением/логотипом */}
                            <div className={`relative h-48 w-full overflow-hidden border-b ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                                    }}
                                />
                                <div className={`absolute top-3 left-3 backdrop-blur-md px-2.5 py-1 rounded border ${
                                    isDark ? 'bg-black/70 border-zinc-800' : 'bg-white/80 border-slate-200'
                                }`}>
                                    <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400">OBJ // 0{index + 1}</span>
                                </div>
                            </div>

                            {/* Текстовая информация */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className={`text-xl font-bold uppercase tracking-wide mb-1 transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400 ${
                                        isDark ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {item.name}
                                    </h3>
                                    <p className={`text-sm mb-6 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                                        {item.category}
                                    </p>
                                </div>

                                <div className={`border-t pt-4 flex justify-between items-center text-xs font-mono ${
                                    isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-slate-100 text-slate-400'
                                }`}>
                                    <span>{t.locationLabel}</span>
                                    <span className={`font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Модальное окно с детальной информацией о проекте */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                    <div className={`rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative border ${
                        isDark ? 'bg-zinc-900 border-zinc-800 border-cyan-500/30 text-white' : 'bg-white border-slate-200 border-cyan-500/30 text-slate-900'
                    }`}>
                        
                        {/* Кнопка закрытия */}
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                                isDark ? 'bg-black/70 text-white hover:text-cyan-400 border-zinc-700' : 'bg-slate-100 text-slate-700 hover:text-cyan-600 border-slate-300'
                            }`}
                        >
                            ✕
                        </button>

                        {/* Картинка в модальном окне */}
                        <div className={`relative h-56 w-full ${isDark ? 'bg-zinc-950' : 'bg-slate-100'}`}>
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                                }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-zinc-900' : 'from-white'} via-transparent to-transparent`} />
                        </div>

                        {/* Контент модального окна */}
                        <div className="p-6">
                            <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                                {selectedProject.category}
                            </span>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {selectedProject.name}
                            </h3>
                            <p className={`text-sm mb-4 ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                                {selectedProject.description}
                            </p>
                            <div className={`p-4 rounded-xl border mb-6 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                                <h4 className={`text-xs font-mono uppercase mb-1 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>{t.modalWorks}</h4>
                                <p className={`text-sm ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>{selectedProject.details}</p>
                            </div>

                            <div className={`flex justify-between items-center pt-2 border-t text-xs font-mono ${
                                isDark ? 'border-zinc-800 text-zinc-500' : 'border-slate-200 text-slate-400'
                            }`}>
                                <span>{t.locationLabel} <strong className={isDark ? 'text-zinc-300' : 'text-slate-700'}>{selectedProject.location}</strong></span>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer"
                                >
                                    {t.closeBtn}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}