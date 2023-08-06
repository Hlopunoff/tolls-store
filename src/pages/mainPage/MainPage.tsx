import { Hero } from '../../components/hero/Hero';
import { ProductList } from '../../components/productList/ProductList';
import { BrandsPreview } from '../../components/brands/BrandsPreview';

export const MainPage = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <BrandsPreview />
    </>
  );
};
