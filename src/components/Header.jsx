import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.svg" alt="Asnero" className="logo-icon" />
          <span className="logo-text">Asnero</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Услуги</a></li>
            <li><a href="#benefits" onClick={() => setIsMenuOpen(false)}>Преимущества</a></li>
            <li><a href="#integrations" onClick={() => setIsMenuOpen(false)}>Интеграции</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакты</a></li>
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary header-cta">
          Связаться
        </a>

        <button
          className={`burger ${isMenuOpen ? 'burger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
