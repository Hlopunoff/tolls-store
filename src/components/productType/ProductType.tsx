import { useRef } from 'react';
import { SingleProduct } from '../singleProduct/SingleProduct';
import { useMatchMedia } from '../../hooks/use-match-media';

import s from './productType.module.scss';

const mediaQueries = ['(max-width: 950px)'];

let CURR_OFFSET = 0;

export const ProductType = ({ img, img2x }: { img: string; img2x: string }) => {
  const [isLaptopSlider] = useMatchMedia(mediaQueries);
  const sliderRef = useRef<HTMLDivElement>(null);

  const changeSlide = (arrow: 'left' | 'right') => {
    if (sliderRef.current && !isLaptopSlider) {
      if (arrow === 'left') {
        CURR_OFFSET -= 5;
      } else {
        CURR_OFFSET += 5;
      }

      if (CURR_OFFSET === -10) {
        CURR_OFFSET = 0;
      } else if (CURR_OFFSET === 5) {
        CURR_OFFSET = -5;
      }

      sliderRef.current.style.left = `${CURR_OFFSET * 10}%`;
    } else {
      if (arrow === 'left') {
        CURR_OFFSET -= 1;
      } else {
        CURR_OFFSET += 1;
      }

      if (CURR_OFFSET === -3) {
        CURR_OFFSET = 0;
      } else if (CURR_OFFSET === 1) {
        CURR_OFFSET = -1;
      }

      sliderRef.current!.style.left = `${CURR_OFFSET * 100}%`;
    }
  };

  return (
    <section className={s.productType}>
      <div className={s.productTypeTop}>
        <h2 className={s.productTypeTitle}>Малярные товары</h2>
        <nav className={s.productTypeArrows}>
          <button
            className={`${s.productTypeArrow} ${s.productTypeArrowLeft}`}
            onClick={() => changeSlide('left')}
          ></button>
          <button
            className={`${s.productTypeArrow} ${s.productTypeArrowRight}`}
            onClick={() => changeSlide('right')}
          ></button>
        </nav>
      </div>
      <div className={s.productTypeBottom}>
        <div className={s.productTypeSlider} ref={sliderRef}>
          <SingleProduct img={img} img2x={img2x} id={'1'} />
          <SingleProduct img={img} img2x={img2x} id={'2'} />
          <SingleProduct img={img} img2x={img2x} id={'3'} />
        </div>
      </div>
    </section>
  );
};
