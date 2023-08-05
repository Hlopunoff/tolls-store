import { ProductType } from '../productType/ProductType';

import s from './productList.module.scss';

import productImage1 from '../../assets/images/product-1.png';
import productImage12x from '../../assets/images/product-1_2x.png';
import productImage2 from '../../assets/images/product-2.png';
import productImage22x from '../../assets/images/product-2_2x.png';
import productImage3 from '../../assets/images/product-3.png';
import productImage32x from '../../assets/images/product-3_2x.png';
import productImage4 from '../../assets/images/product-4.png';
import productImage42x from '../../assets/images/product-4_2x.png';
import productImage5 from '../../assets/images/product-5.png';
import productImage52x from '../../assets/images/product-5_2x.png';
import productImage6 from '../../assets/images/product-6.png';
import productImage62x from '../../assets/images/product-6_2x.png';

export const ProductList = () => {
  return (
    <section className={s.products}>
      <div className="container">
        <div className={s.productsWrap}>
          <ProductType img={productImage1} img2x={productImage12x} />
          <ProductType img={productImage2} img2x={productImage22x} />
          <ProductType img={productImage3} img2x={productImage32x} />
          <ProductType img={productImage4} img2x={productImage42x} />
          <ProductType img={productImage5} img2x={productImage52x} />
          <ProductType img={productImage6} img2x={productImage62x} />
        </div>
      </div>
    </section>
  );
};
