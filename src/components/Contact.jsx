import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">Готовы автоматизировать ваш бизнес?</h2>
            <p className="contact-description">
              Свяжитесь с нами, чтобы обсудить ваши задачи и получить бесплатную консультацию
              по внедрению ИИ-автоматизации.
            </p>
            <div className="contact-methods">
              <a href="tel:+79150662797" className="contact-method">
                <span className="contact-method-icon">📞</span>
                <div className="contact-method-content">
                  <span className="contact-method-label">Телефон техподдержки</span>
                  <span className="contact-method-value">+7 (915) 066-27-97</span>
                </div>
              </a>
              <a href="mailto:corp@asnero.ru" className="contact-method">
                <span className="contact-method-icon">✉️</span>
                <div className="contact-method-content">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">corp@asnero.ru</span>
                </div>
              </a>
              <a href="https://t.me/asnero" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-method-icon">💬</span>
                <div className="contact-method-content">
                  <span className="contact-method-label">Telegram</span>
                  <span className="contact-method-value">@asnero</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Иван Иванов" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Телефон или Email</label>
                <input type="text" id="contact" name="contact" placeholder="+7 (___) ___-__-__" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Расскажите о вашей задаче</label>
                <textarea id="message" name="message" rows="4" placeholder="Опишите, что хотите автоматизировать..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Отправить заявку
              </button>
              <p className="form-note">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
