import { FC } from 'react';

import s from './dropDownMenu.module.scss';

interface DropDownMenuProps {
  isOpened: boolean;
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ isOpened }) => {
  return (
    <nav className={`${s.menu} ${isOpened ? s.menuShown : ''}`}>
      <ul className={s.menuCategories}>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Малярные товары</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Электроинструмент</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Спецодежда</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Сезонное</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Для дома и дачи</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
        <li className={`${s.menuCategory} ${s.category}`}>
          <span className={s.categoryTitle}>Инструменты</span>
          <div className={s.categoryIcon}></div>
          <Submenu />
        </li>
      </ul>
    </nav>
  );
};

const Submenu = () => {
  return (
    <ul className={s.submenu}>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
      <li className={s.submenuCategory}>
        <a href="#" className={s.submenuCategoryLink}>
          Садово огородный инвентарь
        </a>
      </li>
    </ul>
  );
};
