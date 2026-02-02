import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/logo.svg" alt="Asnero" className="footer-logo-icon" />
              <span className="footer-logo-text">Asnero</span>
            </a>
            <p className="footer-tagline">
              ИИ-автоматизация бизнес-процессов
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Навигация</h4>
              <ul className="footer-list">
                <li><a href="#services">Услуги</a></li>
                <li><a href="#benefits">Преимущества</a></li>
                <li><a href="#integrations">Интеграции</a></li>
                <li><a href="#contact">Контакты</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Контакты</h4>
              <ul className="footer-list">
                <li><a href="tel:+79150662797">+7 (915) 066-27-97</a></li>
                <li><a href="mailto:corp@asnero.ru">corp@asnero.ru</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Asnero. Все права защищены.
          </p>
          <p className="footer-legal">
            Соответствие 152-ФЗ. Данные хранятся на серверах в РФ.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
