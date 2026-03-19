import { Button } from '@/components/ui/button';
import { Product } from '../../lib/types';

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetail }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#FE934F] hover:shadow-[0_15px_40px_rgba(254,147,79,0.3)] md:p-8">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-transparent via-[rgba(252,145,69,0.1)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto mb-4 h-40 w-40 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-48 md:w-48"
        />
        <div className="flex h-20 items-center justify-center">
          <h3 className="text-base font-semibold text-white md:text-lg">{product.name}</h3>
        </div>
        <div className="my-4 text-2xl font-bold text-[#FC9145]">₹{product.price.toLocaleString()}</div>
        <Button
          onClick={() => onViewDetail(product)}
          className="mt-4 w-full rounded-full bg-gradient-to-r from-[#FD8E49] via-black to-[#FD8E49] bg-[length:200%_100%] bg-right font-semibold transition-all duration-300 hover:bg-left hover:scale-105 hover:shadow-[0_6px_15px_rgba(253,142,73,0.4)]"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
