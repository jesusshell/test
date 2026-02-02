import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">ИИ-автоматизация под ключ</span>
          <h1 className="hero-title">
            Внедряем <span className="highlight">искусственный интеллект</span> в ваш бизнес
          </h1>
          <p className="hero-description">
            Снижаем ручную рутину до 80%, связываем любые системы в единую экосистему
            и обеспечиваем полное соответствие 152-ФЗ с хранением данных в России.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Получить консультацию
            </a>
            <a href="#services" className="btn btn-secondary">
              Узнать подробнее
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">80%</span>
              <span className="hero-stat-label">снижение рутины</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">24/7</span>
              <span className="hero-stat-label">работа без перерывов</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">152-ФЗ</span>
              <span className="hero-stat-label">полное соответствие</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
