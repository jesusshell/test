import './Benefits.css';

const benefits = [
  {
    number: '01',
    title: 'Замена целых отделов',
    description: 'Автоматизированные сценарии заменяют работу целых отделов, сокращая расходы на персонал.',
  },
  {
    number: '02',
    title: 'Исключение человеческого фактора',
    description: 'Робот не устает, не болеет, не уходит в отпуск и не допускает ошибок в расчетах.',
  },
  {
    number: '03',
    title: 'Единая шина данных',
    description: 'Все ваши системы работают синхронно — данные передаются автоматически между сервисами.',
  },
  {
    number: '04',
    title: 'Безопасность данных',
    description: 'Работа с госсектором и крупным бизнесом благодаря соответствию всем требованиям 152-ФЗ.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-subtitle">
          Компании, которым важно соответствие 152-ФЗ и безопасность данных, доверяют нам
        </p>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="benefit-number">{benefit.number}</span>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
