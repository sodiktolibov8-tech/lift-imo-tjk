import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';

export default function CalculatorSection() {
  const [buildingType, setBuildingType] = useState('residential');
  const [floors, setFloors] = useState(9);
  const [capacity, setCapacity] = useState(630);

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 p-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl mb-4">
            <Calculator className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Калькулятор предварительного подбора</h2>
          <p className="text-slate-400 text-sm mt-2">Выберите параметры вашего объекта для расчета</p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Тип объекта */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-3">1. Тип объекта</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'residential', label: 'Жилой дом' },
                { id: 'commercial', label: 'Бизнес-центр / ТРЦ' },
                { id: 'cottage', label: 'Частный коттедж' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBuildingType(item.id)}
                  className={`p-3.5 rounded-xl border text-sm font-medium transition-all text-center flex items-center justify-center gap-2 ${
                    buildingType === item.id
                      ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {buildingType === item.id && <Check className="w-4 h-4" />}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Количество этажей */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase text-slate-400">2. Количество этажей</label>
              <span className="text-blue-400 font-bold text-lg">{floors} этажей</span>
            </div>
            <input
              type="range"
              min="2"
              max="35"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              className="w-full accent-blue-600 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Грузоподъемность */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-3">3. Грузоподъемность (кг)</label>
            <div className="grid grid-cols-3 gap-3">
              {[400, 630, 1000].map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCapacity(cap)}
                  className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                    capacity === cap
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {cap} кг ({Math.round(cap / 75)} чел.)
                </button>
              ))}
            </div>
          </div>

          {/* Результат */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Рекомендуемое решение:</p>
              <p className="text-base font-bold text-white">
                {buildingType === 'cottage' ? 'Коттеджный лифт KONE/OTIS' : 'Пассажирский лифт KONE Monospace / OTIS Gen2'}
              </p>
            </div>
            <a
              href="#contacts"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm text-center transition-all"
            >
              Запросить КП
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}