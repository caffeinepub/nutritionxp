import HeroSection from '../components/storefront/HeroSection';
import ProductCard from '../components/storefront/ProductCard';
import CategoryScroller from '../components/storefront/CategoryScroller';
import SeasonsBestsellersCarousel from '../components/storefront/SeasonsBestsellersCarousel';
import BrandsSlider from '../components/storefront/BrandsSlider';
import WhyChooseSection from '../components/storefront/WhyChooseSection';
import GallerySection from '../components/storefront/GallerySection';
import SectionContainer from '../components/storefront/SectionContainer';
import { products } from '../lib/data';
import { Product } from '../lib/types';

interface HomePageProps {
  onViewDetail: (product: Product) => void;
}

export default function HomePage({ onViewDetail }: HomePageProps) {
  return (
    <div>
      <HeroSection />

      <SectionContainer id="products">
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetail={onViewDetail} />
          ))}
        </div>
      </SectionContainer>

      <GallerySection />

      <SectionContainer id="categories">
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
          Shop by category
        </h2>
        <CategoryScroller />
      </SectionContainer>

      <SeasonsBestsellersCarousel onViewDetail={onViewDetail} />

      <BrandsSlider />

      <WhyChooseSection />
    </div>
  );
}
