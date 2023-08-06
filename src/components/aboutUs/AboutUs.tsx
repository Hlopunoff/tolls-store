import s from './aboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={s.aboutUs}>
      <div className="container">
        <div className={s.aboutUsWrap}>
          <div className={s.aboutUsImg}></div>
          <div className={s.aboutUsInfo}>
            <h2 className={s.aboutUsTitle}>О нас</h2>
            <p className={s.aboutUsDescr}>
              Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия, при
              которой его правосубъектность отличается от правосубъектности лиц,
              в нем участвующих.
              <br />
              <br /> Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия
            </p>
            <button className={s.aboutUsBtn}>Перейти в каталог</button>
          </div>
        </div>
      </div>
    </section>
  );
};
