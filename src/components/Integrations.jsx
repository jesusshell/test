import './Integrations.css';

const integrations = [
  { name: '1С', icon: '1С' },
  { name: 'Битрикс24', icon: 'B24' },
  { name: 'Telegram', icon: 'TG' },
  { name: 'Email', icon: '@' },
  { name: 'Google Таблицы', icon: 'GS' },
  { name: 'amoCRM', icon: 'amo' },
  { name: 'WhatsApp', icon: 'WA' },
  { name: 'REST API', icon: 'API' },
];

const Integrations = () => {
  return (
    <section id="integrations" className="section integrations">
      <div className="container">
        <h2 className="section-title">Интеграции</h2>
        <p className="section-subtitle">
          Связываем все ваши сервисы в единую экосистему
        </p>
        <div className="integrations-grid">
          {integrations.map((item, index) => (
            <div key={index} className="integration-card">
              <span className="integration-icon">{item.icon}</span>
              <span className="integration-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="integrations-note">
          <p>И любые другие сервисы с API</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
