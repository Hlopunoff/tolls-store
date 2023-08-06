import s from './brands.module.scss';

import truperBrandIcon from '../../assets/images/truper.png';
import truperBrandIcon2x from '../../assets/images/truper_2x.png';
import centerToolBrandIcon from '../../assets/images/center-tool.png';
import centerToolBrandIcon2x from '../../assets/images/center-tool_2x.png';
import finlandBrandIcon from '../../assets/images/finland.png';
import finlandBrandIcon2x from '../../assets/images/finland_2x.png';
import kaproBrandIcon from '../../assets/images/kapro.png';
import kaproBrandIcon2x from '../../assets/images/kapro_2x.png';

export const Brands = () => {
  return (
    <section className={s.brands}>
      <div className="container">
        <h2 className={s.brandsTitle}>Наши бренды</h2>
        <div className={s.brandsSlider}>
          <ul className={s.brandsContent}>
            <li className={s.brandsBrand}>
              <img
                src={truperBrandIcon}
                alt="TRUPER"
                srcSet={`${truperBrandIcon} 1x, ${truperBrandIcon2x} 2x`}
                loading="lazy"
              />
            </li>
            <li className={s.brandsBrand}>
              <img
                src={centerToolBrandIcon}
                alt="Центро инструмент"
                srcSet={`${centerToolBrandIcon} 1x, ${centerToolBrandIcon2x} 2x`}
                loading="lazy"
              />
            </li>
            <li className={s.brandsBrand}>
              <img
                src={finlandBrandIcon}
                alt="Finland"
                srcSet={`${finlandBrandIcon} 1x, ${finlandBrandIcon2x} 2x`}
                loading="lazy"
              />
            </li>
            <li className={s.brandsBrand}>
              <img
                src={kaproBrandIcon}
                alt="Kapro"
                srcSet={`${kaproBrandIcon} 1x, ${kaproBrandIcon2x} 2x`}
              />
            </li>
            <li className={s.brandsBrand}>
              <img
                src={truperBrandIcon}
                alt="TRUPER"
                srcSet={`${truperBrandIcon} 1x, ${truperBrandIcon2x} 2x`}
                loading="lazy"
              />
            </li>
            <li className={s.brandsBrand}>
              <img
                src={centerToolBrandIcon}
                alt="Центро инструмент"
                srcSet={`${centerToolBrandIcon} 1x, ${centerToolBrandIcon2x} 2x`}
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
