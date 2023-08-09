import { Hero } from '../../components/hero/Hero';
import { ProductList } from '../../components/productList/ProductList';
import { BrandsPreview } from '../../components/brands/BrandsPreview';
import { AboutUs } from '../../components/aboutUs/AboutUs';
import { FeaturesPreview } from '../../components/featuresPreview/FeaturesPreview';
import { NewsPreview } from '../../components/newsPreview/NewsPreview';

export const MainPage = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <BrandsPreview />
      <AboutUs />
      <FeaturesPreview />
      <NewsPreview />
    </>
  );
};
