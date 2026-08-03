import React from 'react';
import { Shield, Award, Wrench, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const brands = ['KONE', 'OTIS', 'XIZI', 'United'];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              О компании ООО «ИМО»
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6">
              Лидер в сфере поставки и обслуживания лифтового оборудования
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Мы осуществляем деятельность в сфере полного спектра монтажа и сервисного обслуживания лифтов и эскалаторов. Имеем официальную лицензию Службы по надзору за безопасной работой в промышленности при Правительстве РТ.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Официальный продавец оборудования KONE в Таджикистане',
                'Сертифицированный монтаж и наладка лифтов OTIS',
                'Круглосуточный диспетчерский контроль и ремонт',
                'Гарантированное соблюдение сроков поставки'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500 font-semibold uppercase mr-2">Работаем с брендами:</span>
              {brands.map((brand) => (
                <span key={brand} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <Shield className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-white mb-1">Лицензия</h3>
              <p className="text-xs text-slate-400">№ Х0001206 Госнадзора Республики Таджикистан</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <Award className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-white mb-1">Качество</h3>
              <p className="text-xs text-slate-400">Гарантия на все виды работ и комплектующие</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 col-span-2">
              <Wrench className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-white mb-1">Опыт специалистов</h3>
              <p className="text-xs text-slate-400">Сертифицированная команда инженеров и монтажников</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}