import React from 'react';

export default function Dispatch() {
    return (
        <section className="bg-black text-slate-300 body-font py-16 relative overflow-hidden">
            {/* Фоновое неоновое свечение */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-5 py-12 mx-auto flex flex-wrap relative z-10">

                {/* Заголовок секции */}
                <div className="flex w-full mb-12 flex-wrap items-end border-b border-zinc-800 pb-8">
                    <div className="lg:w-1/3 lg:mb-0 mb-4">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              // 24/7 MONITORING & CONTROL
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                            Системы <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Диспетчеризации</span>
                        </h1>
                    </div>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base text-zinc-400 border-l-2 border-cyan-600/50 pl-4">
                        Полный контроль над работой каждого лифта и эскалатора в реальном времени. Предотвращение поломок до их возникновения и мгновенное реагирование на нештатные ситуации.
                    </p>
                </div>

                {/* Основной контент: текст слева, видео справа */}
                <div className="flex flex-wrap items-center justify-between w-full gap-8 lg:gap-0">

                    {/* Текстовый блок с преимуществами */}
                    <div className="lg:w-1/2 w-full lg:pr-10">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase mb-4">
                            Интеллектуальный контроль безопасности
                        </h3>
                        <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
                            Современные системы диспетчеризации объединяют все инженерные сети здания в единый центр управления. Диспетчер видит статус оборудования, параметры движения кабины и сигналы тревоги в режиме онлайн.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-start gap-4">
                                <span className="text-cyan-400 font-mono text-lg font-bold">01</span>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm mb-1">Круглосуточный мониторинг</h4>
                                    <p className="text-zinc-400 text-xs sm:text-sm">Постоянный сбор телеметрии и диагностика узлов лифтового оборудования 365 дней в году.</p>
                                </div>
                            </div>

                            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-start gap-4">
                                <span className="text-cyan-400 font-mono text-lg font-bold">02</span>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm mb-1">Быстрое реагирование</h4>
                                    <p className="text-zinc-400 text-xs sm:text-sm">Автоматическая передача аварийных сигналов и вызов технической бригады при сбоях.</p>
                                </div>
                            </div>

                            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-start gap-4">
                                <span className="text-cyan-400 font-mono text-lg font-bold">03</span>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-sm mb-1">Голосовая связь</h4>
                                    <p className="text-zinc-400 text-xs sm:text-sm">Прямая двухсторонняя переговорная связь между пассажиром в кабине и оператором диспетчерской.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Блок с локальным видео */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-zinc-900">
                            <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-zinc-800 z-20">
                                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                    ELEVATOR SYSTEMS // PROMO
                                </span>
                            </div>

                            <div className="relative w-full pt-[56.25%]">
                                <video
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src="/video.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    Ваш браузер не поддерживает видеоэлемент.
                                </video>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-xs font-mono mt-3 text-center">
                            *Видео-обзор устройства и работы лифтовых систем.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}