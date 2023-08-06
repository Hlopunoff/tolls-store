import { Hero } from '../../components/hero/Hero';
import { ProductList } from '../../components/productList/ProductList';
import { BrandsPreview } from '../../components/brands/BrandsPreview';
import { AboutUs } from '../../components/aboutUs/AboutUs';

export const MainPage = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <BrandsPreview />
      <AboutUs />
    </>
  );
};
