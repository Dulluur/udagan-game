import React from 'react';

const Economic = () => (
  <section className="py-16 px-8 text-center">
    <h3 className="text-3xl font-bold mb-6">Экономический вывод</h3>
    <p className="mb-4">
      На основе прогнозируемых продаж и расходов сформирована финансовая модель проекта.
    </p>
    <a
      href="/files/economic_report.xlsx"
      download
      className="inline-block bg-amber-700 text-amber-100 px-6 py-3 rounded-lg hover:bg-opacity-90 transition mx-auto"
    >
      Скачать Excel-файл
    </a>
  </section>
);

export default Economic;