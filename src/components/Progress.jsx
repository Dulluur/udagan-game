import React from 'react';

const itemsLeft = [
  'Парирование',
  'Дерево навыков',
  'Интеграция сюжета',
  'Звуки',
  'Больше врагов',
  'Больше локаций',
  'Больше боссов'
];
const itemsDone = [
  'Способности',
  'Основы боевой системы',
  'Сприт и анимации ГГ',
  'Первые противники',
  'Первый босс',
  'Платформинг',
  'Базовый интерфейс'
];

const Progress = () => (
  <section className="py-16 px-8 bg-gray-900">
    <h3 className="text-3xl font-bold text-white mb-6 text-center">Прогресс и результаты</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      <ul className="space-y-2">
        {itemsDone.map((item, idx) => (
          <li key={idx} className="text-green-400">✓ {item}</li>
        ))}
      </ul>
      <ul className="space-y-2">
        {itemsLeft.map((item, idx) => (
          <li key={idx} className="text-yellow-300">• {item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Progress;