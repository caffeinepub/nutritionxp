import { products } from '../../lib/data';
import { Product } from '../../lib/types';
import { Button } from '@/components/ui/button';
import SectionContainer from './SectionContainer';

interface SeasonsBestsellersCarouselProps {
  onViewDetail: (product: Product) => void;
}

export default function SeasonsBestsellersCarousel({ onViewDetail }: SeasonsBestsellersCarouselProps) {
  return (
    <SectionContainer>
      <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
        Season's Bestsellers!
      </h2>
      <div className="scrollbar-custom -mx-4 flex gap-6 overflow-x-auto px-4 py-6 md:gap-8">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-2 md:min-w-[320px]"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-video w-full object-cover p-2 transition-transform hover:scale-105"
              />
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#6366f1] shadow-md">
                {product.category}
              </span>
            </div>
            <div className="flex flex-col p-6">
              <h3 className="mb-3 text-lg font-bold leading-tight text-[#111111]">{product.name}</h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#747474]">{product.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100"
                    alt="User"
                    className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#202020]">₹{product.price.toLocaleString()}</div>
                    <div className="text-xs text-[#7A7A7A]">{product.category}</div>
                  </div>
                </div>
                <Button
                  onClick={() => onViewDetail(product)}
                  className="rounded-full bg-gradient-to-r from-[#FD8E49] via-black to-[#FD8E49] bg-[length:200%_100%] bg-right px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-left hover:scale-105"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
