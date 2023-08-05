import { useRef, MouseEventHandler } from 'react';
import { colors } from '../../utils/colors';

import s from './singleProduct.module.scss';

import barChartIcon from '../../assets/icons/bar-chart-white.svg';
import favoriteIcon from '../../assets/icons/heart.svg';
import shoppingCartIcon from '../../assets/icons/shopping-cart-orange.svg';
import tickCircleIcon from '../../assets/icons/check-circle-white.svg';

export const SingleProduct = ({
  img,
  img2x,
  id,
}: {
  img: string;
  img2x: string;
  id: string;
}) => {
  const shoppingCartIconRef = useRef<HTMLImageElement>(null);

  const addToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.currentTarget;

    if (shoppingCartIconRef.current) {
      if (shoppingCartIconRef.current.src === tickCircleIcon) {
        shoppingCartIconRef.current.src = shoppingCartIcon;
        target.style.backgroundColor = 'transparent';

        if (target.parentElement) {
          target.parentElement.style.marginTop = '0';
        }
      } else {
        shoppingCartIconRef.current.src = tickCircleIcon;
        target.style.backgroundColor = colors.orange;

        if (target.parentElement) {
          target.parentElement.style.marginTop = '7px';
        }
      }
    }
  };

  return (
    <div className={s.product}>
      <div className={s.productTop}>
        <span className={s.new}>Новинка</span>
        <div className={s.productTopCla}>
          <button>
            <img src={barChartIcon} alt="Сравнить товар" />
          </button>
          <button>
            <img src={favoriteIcon} alt="Добавить товар в избранное" />
          </button>
        </div>
      </div>
      <div className={s.productImgSlider}>
        <ul className={s.productImgContent}>
          <li className={s.productImgSlide} id={id}>
            <img
              src={img}
              alt="Фото товара"
              srcSet={`${img2x} 2x`}
              loading="lazy"
            />
          </li>
          <li className={s.productImgSlide} id={id}>
            <img
              src={img}
              alt="Фото товара"
              srcSet={`${img2x} 2x`}
              loading="lazy"
            />
          </li>
          <li className={s.productImgSlide} id={id}>
            <img
              src={img}
              alt="Фото товара"
              srcSet={`${img2x} 2x`}
              loading="lazy"
            />
          </li>
          <li className={s.productImgSlide} id={id}>
            <img
              src={img}
              alt="Фото товара"
              srcSet={`${img2x} 2x`}
              loading="lazy"
            />
          </li>
        </ul>
        <nav className={s.productSlidesNav}>
          <a
            className={`${s.productSlideNav} ${s.productSlideNavActive}`}
            href={`#${id}`}
          ></a>
          <a className={s.productSlideNav} href={`#${id}`}></a>
          <a className={s.productSlideNav} href={`#${id}`}></a>
          <a className={s.productSlideNav} href={`#${id}`}></a>
        </nav>
      </div>
      <div className={s.productInfo}>
        <h4 className={s.productTitle}>Эмаль Condor ПФ-115 жёлтая 1,8 кг</h4>
        <div className={`${s.productInfoBottom}`}>
          <div className={s.productPrices}>
            <span className={`${s.productPrice} ${s.productPriceCurrent}`}>
              500 ₽
            </span>
            <span className={`${s.productPrice} ${s.productPricePrevious}`}>
              720 ₽
            </span>
          </div>
          <div className={s.productInstock}>в наличии</div>
          <button className={s.productAddBtn} onClick={addToCart}>
            <img
              src={shoppingCartIcon}
              alt="Добавить в корзину"
              ref={shoppingCartIconRef}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
