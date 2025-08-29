
import '../Footer/index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-column">
          <h3 className="footer-logo">
            <span role="img" aria-label="basket">🛒</span> 1C–Товары
          </h3>
          <p>Линия консультации<br /><strong>+7(495)-111-00-10</strong></p>
          <p>Наш e-mail<br /><a href="mailto:info@rozn.info" className="green-link">info@rozn.info</a></p>
          <button className="footer-button">Заказать звонок</button>
          <p>Для активации перейдите на <a href="https://portal.1c.ru" className="blue-link">portal.1c.ru</a> или обратитесь к Вашему партнеру 1С.</p>
          <p><a href="#" className="white-link">Инструкция по установке сервиса</a></p>
        </div>

       
        <div className="footer-column">
          <h4>Информация</h4>
          <ul>
            <li><a href="#" className="white-link">Как это работает</a></li>
            <li><a href="#" className="white-link">Инструкции</a></li>
            <li><a href="#" className="white-link">Блог</a></li>
            <li><a href="#" className="white-link">О нас</a></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>Продукты</h4>
          <ul>
            <li><a href="#" className="white-link">1С-Ритейл Чекер Демо</a></li>
            <li><a href="#" className="white-link">1С-Товары.Тестовый для магазина на 1 месяц</a></li>
            <li><a href="#" className="white-link">1С-Ритейл Чекер</a></li>
            <li><a href="#" className="white-link">1С-Товары 300</a></li>
            <li><a href="#" className="white-link">1С-Товары 30000</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>1С-Товары © 2023</span>
        <span>Сайт создан — <a href="https://wtstudio.ru" className="white-link">wtstudio.ru</a></span>
      </div>
    </footer>
  );
};

export default Footer;