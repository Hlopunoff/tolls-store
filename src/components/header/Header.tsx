import { useState, MouseEventHandler } from 'react';

import { DropDownMenu } from '../dropDownMenu/DropDownMenu';

import s from './header.module.scss';
import logo from '../../assets/images/logo.png';
import favoritesIcon from '../../assets/icons/heart.svg';
import comparisonIcon from '../../assets/icons/bar-chart-white.svg';
import personalAccountIcon from '../../assets/icons/personal-account.svg';
import shoppingCartIcon from '../../assets/icons/shopping-cart.svg';
import burgerMenuIcon from '../../assets/icons/burger.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import vkIcon from '../../assets/icons/vk.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const showMenu: MouseEventHandler<HTMLButtonElement> = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  return (
    <header>
      <nav className={s.headerTop}>
        <div className="container flex space-between">
          <div className={s.headerTopLogo}>
            <img src={logo} alt="Логотип instroom" />
          </div>
          <div className={s.headerTopSchedule}>
            <span>Время работы:</span>
            <span>10:00–20:00</span>
          </div>
          <div className={s.headerTopCallback}>
            <span className={s.headerTopPhone}>+7 495 120-32-14</span>
            <a href="tel:+74951203214" className={s.headerTopCall}>
              Заказать звонок
            </a>
          </div>
          <ul className={s.headerTopOptions}>
            <li className={s.headerTopOption}>
              <div className={s.badge}>0</div>
              <img src={favoritesIcon} alt="Избранное" />
            </li>
            <li className={s.headerTopOption}>
              <div className={s.badge}>0</div>
              <img src={comparisonIcon} alt="Сравнение" />
            </li>
            <li className={s.headerTopOption}>
              <div className={s.badge}>0</div>
              <img src={personalAccountIcon} alt="Личный кабинет" />
            </li>
            <li className={s.headerTopOption}>
              <div className={s.badge}>0</div>
              <img src={shoppingCartIcon} alt="Корзина" />
            </li>
          </ul>
          <div className={s.headerTopTotal}>
            <span>Товаров на сумму</span>
            <b>2 000 ₽</b>
          </div>
        </div>
      </nav>
      <nav className={s.headerBottom}>
        <div className="container flex space-between">
          <button
            className={s.headerBottomCatalog}
            onClick={showMenu}
            title="Каталог товаров"
          >
            <img src={burgerMenuIcon} alt="Каталог товаров" />
            <span>Каталог товаров</span>
          </button>
          <ul className={s.headerBottomCategories}>
            <li className={s.headerBottomCategory}>
              <a href="#" className="header-bottom__category-link">
                О компании
              </a>
            </li>
            <li className={s.headerBottomCategory}>
              <a href="#" className="header-bottom__category-link">
                Акции
              </a>
            </li>
            <li className={s.headerBottomCategory}>
              <a href="#" className="header-bottom__category-link">
                Хиты сезона
              </a>
            </li>
            <li className={s.headerBottomCategory}>
              <a href="#" className="header-bottom__category-link">
                Новинки
              </a>
            </li>
          </ul>
          <ul className={s.headerBottomSocials}>
            <li className="header-bottom__social">
              <img src={instagramIcon} alt="Инстаграм" />
            </li>
            <li className="header-bottom__social">
              <img src={vkIcon} alt="В контакте" />
            </li>
            <li className="header-bottom__social">
              <img src={facebookIcon} alt="Facebook" />
            </li>
          </ul>
          <div className={s.headerBottomSearchWrap}>
            <input
              type="text"
              className={s.headerBottomSearch}
              placeholder="Поиск по каталогу"
            />
          </div>
        </div>
        <DropDownMenu isOpened={isOpened} />
      </nav>
    </header>
  );
};
