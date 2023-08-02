import s from './hero.module.scss';

import arrowIcon from '../../assets/icons/arrow-left.svg';

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.banners}>
          <div className={`${s.banner} ${s.banner1}`}>
            <h2 className={`${s.bannerTitle} ${s.bannerTitleMain}`}>
              DeWALT - Инструмент с настоящим характером
            </h2>
            <button className={s.bannerCla}>Перейти в каталог</button>
            <button className={s.bannerBtn}>
              <img src={arrowIcon} alt="Перейти в раздел" />
            </button>
          </div>
          <div className={`${s.banner} ${s.banner2}`}>
            <h2 className={s.bannerTitle}>Акции</h2>
            <button className={s.bannerBtn}>
              <img src={arrowIcon} alt="Перейти в раздел" />
            </button>
          </div>
          <div className={`${s.banner} ${s.banner3}`}>
            <h2 className={s.bannerTitle}>Новое поступление</h2>
            <button className={s.bannerBtn}>
              <img src={arrowIcon} alt="Перейти в раздел" />
            </button>
          </div>
          <div className={`${s.banner} ${s.banner4}`}>
            <h2 className={s.bannerTitle}>Акции на сверла</h2>
            <button className={s.bannerBtn}>
              <img src={arrowIcon} alt="Перейти в раздел" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
