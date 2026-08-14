import placeholderImg from '../assets/images/placeholder.svg';

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'lifts', name: 'Виды лифтов' },
  { id: 'cabins', name: 'Кабины' },
  { id: 'doors', name: 'Двери' },
  { id: 'dispatch', name: 'Диспетчеризация' },
  { id: 'projects', name: 'Наши проекты' },
];

export const liftsData = [
  // --- 2.1 ВИДЫ ЛИФТОВ ---
  {
    id: 'passenger',
    title: 'Пассажирские лифты',
    category: 'lifts',
    description: 'Для жилых комплексов, офисных центров и отелей. Высокий уровень комфорта и бесшумность.',
    speed: 'до 2.5 м/с',
    capacity: 'до 1600 кг',
    images: [placeholderImg]
  },
  {
    id: 'panoramic',
    title: 'Панорамные лифты',
    category: 'lifts',
    description: 'Эстетичные лифты с остеклением для ТРЦ, бизнес-центров и современных зданий.',
    speed: 'до 2.0 м/с',
    capacity: 'до 1250 кг',
    images: [placeholderImg]
  },
  {
    id: 'freight',
    title: 'Грузовые лифты',
    category: 'lifts',
    description: 'Надежные подъемные механизмы для складов, производств и торговых комплексов.',
    speed: 'до 1.0 м/с',
    capacity: 'до 5000 кг',
    images: [placeholderImg]
  },

  // --- 2.2 КАБИНЫ ---
  {
    id: 'cabin-lux',
    title: 'Кабина «Люкс»',
    category: 'cabins',
    description: 'Отделка из полированной нержавеющей стали, светодиодные панели, зеркало в полный рост и поручни.',
    speed: 'Опционально',
    capacity: 'Под заказ',
    images: [placeholderImg]
  },
  {
    id: 'cabin-standard',
    title: 'Кабина «Стандарт»',
    category: 'cabins',
    description: 'Практичное покрытие из антивандального металлопласта, экономичное LED-освещение.',
    speed: 'Стандарт',
    capacity: 'Под заказ',
    images: [placeholderImg]
  },

  // --- 2.3 ДВЕРИ ---
  {
    id: 'doors-auto',
    title: 'Автоматические двери',
    category: 'doors',
    description: 'Телескопические и центрального открывания. Оснащены световой завесой безопасности.',
    speed: 'Регулируемая',
    capacity: 'Ширина 700-1200мм',
    images: [placeholderImg]
  },
  {
    id: 'doors-fireproof',
    title: 'Противопожарные двери',
    category: 'doors',
    description: 'Двери с высокой огнестойкостью (EI60/EI120) для специализированных объектов.',
    speed: 'Стандарт',
    capacity: 'Сертификат ГОСТ',
    images: [placeholderImg]
  },

  // --- 3. ДИСПЕТЧЕРИЗАЦИЯ ---
  {
    id: 'dispatch-system',
    title: 'Система диспетчеризации 24/7',
    category: 'dispatch',
    description: 'Удаленный мониторинг состояния лифтов в реальном времени, голосовая связь с оператором.',
    speed: 'Онлайн 24/7',
    capacity: 'До 256 лифтов',
    images: [placeholderImg]
  },

  // --- 4. НАШИ ПРОЕКТЫ ---
  {
    id: 'proj-dushanbe-mall',
    title: 'ЖК в центре г. Душанбе',
    category: 'projects',
    description: 'Монтаж и пусконаладка 6 пассажирских и 2 грузовых лифтов с диспетчеризацией.',
    speed: 'Срок: 2025 г.',
    capacity: '8 лифтов',
    images: [placeholderImg]
  }
];