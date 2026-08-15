import React from 'react';

export default function Projects() {
    const projectsList = [

        {
            name: "Қасри Миллат",
            category: "Дворец Нации (Резиденция Президента)",
            location: "Душанбе",
            image: "/project-kasri-millat.jpg"
        },
        {
            name: "United States Embassy",
            category: "Дипломатический объект",
            location: "Душанбе",
            image: "/project-us-embassy.jpg" // Имя вашей картинки в папке public
        },
        {
            name: "Crocus Fitness",
            category: "Фитнес-центр премиум-класса",
            location: "Душанбе",
            image: "/crocus-fitness.jpg"
        },
        {
            name: "Dushanbe Serena Hotel",
            category: "Гостиничный комплекс",
            location: "Душанбе",
            image: "/project-serena.jpg"
        },
        {
            name: "Посольство Ирана",
            category: "Дипломатический объект",
            location: "Душанбе",
            image: "/project-iran.jpg"
        },
        {
            name: "Rudaki Plaza",
            category: "Бизнес-центр класса А",
            location: "Душанбе",
            image: "/project-rudaki.jpg"
        },
        {
            name: "Элит-Строй-Сервис",
            category: "Строительный партнер",
            location: "Душанбе",
            image: "/project-elit.jpg"
        },
        {
            name: "Diar Dushanbe",
            category: "Многофункциональный комплекс",
            location: "Душанбе",
            image: "/project-diar.jpg"
        },
        {
            name: "Сангтудинская ГЭС-1",
            category: "Промышленный энергетический объект",
            location: "Таджикистан",
            image: "/project-sangtuda.jpg"
        },
        {
            name: "Посольство Индии",
            category: "Дипломатический объект",
            location: "Душанбе",
            image: "/project-india.jpg"
        },
        {
            name: "Hyatt Regency",
            category: "Международный отельный комплекс",
            location: "Душанбе",
            image: "/project-hyatt.jpg"
        }
    ];

    return (
        <section id="projects" className="bg-black text-slate-300 body-font py-20 relative overflow-hidden">
            {/* Фоновое неоновое свечение */}
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-5 py-12 mx-auto relative z-10">

                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            // TRUSTED PARTNERS & KEY CLIENTS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                        Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Проекты</span>
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
                        Реализованные поставки оборудования, монтаж и техническое обслуживание на ведущих государственных, дипломатических и коммерческих объектах страны.
                    </p>
                </div>

                {/* Сетка проектов */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsList.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                        >
                            {/* Блок с изображением/логотипом */}
                            <div className="relative h-48 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    onError={(e) => {
                                        // Если картинка еще не добавлена, показывается заглушка
                                        e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                                    }}
                                />
                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-800">
                                    <span className="text-[10px] font-mono text-cyan-400">OBJ // 0{index + 1}</span>
                                </div>
                            </div>

                            {/* Текстовая информация */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-1 group-hover:text-cyan-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-6">
                                        {item.category}
                                    </p>
                                </div>

                                <div className="border-t border-zinc-800/80 pt-4 flex justify-between items-center text-xs font-mono text-zinc-500">
                                    <span>ЛОКАЦИЯ:</span>
                                    <span className="text-zinc-300 font-semibold">{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}