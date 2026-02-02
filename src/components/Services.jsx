import './Services.css';

const services = [
  {
    icon: '🤖',
    title: 'ИИ-автоматизация под ключ',
    description: 'Внедряем интеллектуальные решения в ваши бизнес-процессы от анализа до полной реализации.',
  },
  {
    icon: '🔄',
    title: 'Снижение рутины до 80%',
    description: 'Заменяем ручную работу автоматизированными сценариями, освобождая время вашей команды.',
  },
  {
    icon: '⚡',
    title: 'Работа 24/7 без ошибок',
    description: 'Роботы не устают, не ошибаются в цифрах и работают круглосуточно без выходных.',
  },
  {
    icon: '🔗',
    title: 'Интеграция любых систем',
    description: 'Связываем 1С, Битрикс24, Telegram, почту, Google Таблицы и другие сервисы в единую шину данных.',
  },
  {
    icon: '🛡️',
    title: 'Соответствие 152-ФЗ',
    description: 'Полное соблюдение законодательства по персональным данным с локализацией на серверах в РФ.',
  },
  {
    icon: '🏠',
    title: 'Self-hosted решения',
    description: 'Независимость от санкций и зарубежных облаков — инфраструктура разворачивается под клиента.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Что мы делаем</h2>
        <p className="section-subtitle">
          Комплексное внедрение ИИ-автоматизации для оптимизации бизнес-процессов
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
