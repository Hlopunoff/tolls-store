import { SingleProduct } from '../singleProduct/SingleProduct';

import s from './featuresPreview.module.scss';

import productImage1 from '../../assets/images/product-7.png';
import productImage12x from '../../assets/images/product-7_2x.png';
import productImage2 from '../../assets/images/product-1.png';
import productImage22x from '../../assets/images/product-1_2x.png';
import productImage3 from '../../assets/images/product-8.png';
import productImage32x from '../../assets/images/product-8_2x.png';
import productImage4 from '../../assets/images/product-9.png';
import productImage42x from '../../assets/images/product-9_2x.png';

export const FeaturesPreview = () => {
  return (
    <section className={s.featuresPreview}>
      <nav className={s.featuresPreviewNav}>
        <div className="container">
          <ul className={s.featuresPreviewNavWrap}>
            <li
              className={`${s.featuresPreviewNavTitle} ${s.featuresPreviewNavTitleActive}`}
            >
              Новинки
            </li>
            <li className={s.featuresPreviewNavTitle}>Акции</li>
            <li className={s.featuresPreviewNavTitle}>Хиты продаж</li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className={s.featuresPreviewSliderWrap}>
          <ul className={s.featuresPreviewSlider}>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage1}
                img2x={productImage12x}
                id="7"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage2}
                img2x={productImage22x}
                id="8"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage3}
                img2x={productImage32x}
                id="9"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage4}
                img2x={productImage42x}
                id="10"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage4}
                img2x={productImage42x}
                id="11"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage4}
                img2x={productImage42x}
                id="12"
              />
            </li>
            <li className={s.featuresPreviewSlide}>
              <SingleProduct
                img={productImage4}
                img2x={productImage42x}
                id="13"
              />
            </li>
          </ul>
          <div className={s.featuresPreviewSliderDots}>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div
              className={`${s.featuresPreviewSliderDot} ${s.featuresPreviewSliderDotActive}`}
            ></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
            <div className={s.featuresPreviewSliderDot}></div>
          </div>
        </div>
        <a href="#" className="feature-preview__watch-more">
          Смотреть все
        </a>
      </div>
    </section>
  );
};
