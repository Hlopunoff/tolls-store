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
  //! Заглушка на время верстки (В будущем нужно убрать)
  let submenuItems: JSX.Element[] = [];

  for (let i = 0; i < 22; i++) {
    submenuItems.push(
      <SubmenuItem key={i} text="Садово огородный инвентарь" />,
    );
  }

  return <ul className={s.submenu}>{submenuItems}</ul>;
};

const SubmenuItem = ({ text }: { text: string }) => {
  return (
    <li className={s.submenuCategory}>
      <a href="#" className={s.submenuCategoryLink}>
        {text}
      </a>
    </li>
  );
};
