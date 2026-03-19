import { useState } from 'react';
import { ArrowLeft, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuantitySelector from '../components/storefront/QuantitySelector';
import { Product } from '../lib/types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (quantity: number) => void;
}

export default function ProductDetailPage({ product, onBack, onAddToCart }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#0B0B0F] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#FC9145] transition-transform hover:-translate-x-1 md:mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm md:text-base">Back to Products</span>
        </button>

        <div className="overflow-hidden rounded-2xl bg-[#1E1E26] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full rounded-2xl border-2 border-[#333] object-cover md:h-80 lg:h-[500px]"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#FC9145] px-5 py-2 text-sm font-semibold text-white">
                {product.category}
              </span>
              <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">{product.name}</h1>
              <div className="mb-6 text-3xl font-bold text-[#FC9145] md:text-4xl lg:text-5xl">
                ₹{product.price.toLocaleString()}
              </div>
              <p className="mb-8 leading-relaxed text-[#B3B3B3]">{product.description}</p>

              <ul className="mb-8 space-y-3 border-t border-[#333] pt-6">
                {[
                  '100% Authentic Product',
                  'Free Shipping on orders above ₹999',
                  'Easy 7-day return policy',
                  'Secure payment options',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#FC9145]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
              </div>

              <Button
                onClick={() => onAddToCart(quantity)}
                className="w-full rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] py-6 text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(253,142,73,0.5)] md:py-7 md:text-xl"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
