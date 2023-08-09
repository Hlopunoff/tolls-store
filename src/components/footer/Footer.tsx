import s from './footer.module.scss';

import logoIcon from '../../assets/images/logo.png';
import vkIcon from '../../assets/icons/vk.svg';
import instIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerCols}>
          <ul className={s.footerCol}>
            <li className={s.footerColItem}>
              <a href="#">Малярные товары</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Электрооборудование</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Спецодежда</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Для дома и дачи</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Сезонное</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Инструмент</a>
            </li>
          </ul>
          <ul className={s.footerCol}>
            <li className={s.footerColItem}>
              <a href="#">О компании</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Контакты</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Новинки</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Хиты сезона</a>
            </li>
            <li className={s.footerColItem}>
              <a href="#">Распродажи</a>
            </li>
          </ul>
          <ul className={s.footerCol}>
            <li className={s.footerLogo}>
              <img src={logoIcon} alt="Логотип Instroom" />
            </li>
            <li className={`${s.footerColItem} ${s.footerContacts}`}>
              <a href="tel:+74951203214">+7 495 120-32-14</a>
              <a href="tel:+74951203215">+7 495 120-32-15</a>
            </li>
            <li className={s.footerSocials}>
              <a href="#">
                <img src={instIcon} alt="Мы в инстаграм" />
              </a>
              <a href="#">
                <img src={vkIcon} alt="Мы в контакте" />
              </a>
              <a href="#">
                <img src={facebookIcon} alt="Мы в фэйсбук" />
              </a>
            </li>
            <li className={`${s.footerColItem} ${s.footerCopyright}`}>
              <span>Соглашение пользователя</span>
              <span>«Copyright &copy; Название 2023»</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
