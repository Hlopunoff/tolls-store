import s from './newsPreview.module.scss';

import newsImage1 from '../../assets/images/news-1.png';
import newsImage12x from '../../assets/images/news-1_2x.png';
import newsImage2 from '../../assets/images/news-2.png';
import newsImage22x from '../../assets/images/news-2_2x.png';

export const NewsPreview = () => {
  return (
    <section className={s.newsPreview}>
      <div className="container">
        <div className={s.newsPreviewWrap}>
          <div className={s.newsPreviewInfo}>
            <h2 className={s.newsPreviewTitle}>Новости</h2>
            <p className={s.newsPreviewDescr}>
              Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия, при
              которой его правосубъектность отличается от правосубъектности лиц,
              в нем участвующих. Компании имеют статус юридического лица.
            </p>
            <button className={s.newsPreviewBtn}>перейти к новостям</button>
          </div>
          <ul className={s.newsPreviewContent}>
            <li className={s.newsPreviewCard}>
              <div className={s.newsPreviewCardImg}>
                <img
                  src={newsImage1}
                  alt="Новости"
                  srcSet={`${newsImage1} 1x, ${newsImage12x} 2x`}
                />
              </div>
              <h4 className={s.newsPreviewCardTitle}>Название новости</h4>
              <span className={s.newsPreviewCardDate}>12 января 2023</span>
            </li>
            <li className={s.newsPreviewCard}>
              <div className={s.newsPreviewCardImg}>
                <img
                  src={newsImage2}
                  alt="Новости"
                  srcSet={`${newsImage2} 1x, ${newsImage22x} 2x`}
                />
              </div>
              <h4 className={s.newsPreviewCardTitle}>Название новости</h4>
              <span className={s.newsPreviewCardDate}>12 января 2023</span>
            </li>
            <li className={s.newsPreviewCard}>
              <div className={s.newsPreviewCardImg}>
                <img
                  src={newsImage2}
                  alt="Новости"
                  srcSet={`${newsImage2} 1x, ${newsImage22x} 2x`}
                />
              </div>
              <h4 className={s.newsPreviewCardTitle}>Название новости</h4>
              <span className={s.newsPreviewCardDate}>12 января 2023</span>
            </li>
            <li className={s.newsPreviewCard}>
              <div className={s.newsPreviewCardImg}>
                <img
                  src={newsImage1}
                  alt="Новости"
                  srcSet={`${newsImage1} 1x, ${newsImage12x} 2x`}
                />
              </div>
              <h4 className={s.newsPreviewCardTitle}>Название новости</h4>
              <span className={s.newsPreviewCardDate}>12 января 2023</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
