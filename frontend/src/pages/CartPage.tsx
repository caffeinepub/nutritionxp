import { ArrowLeft, ShoppingCart, Trash2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuantitySelector from '../components/storefront/QuantitySelector';
import { CartItem } from '../lib/types';

interface CartPageProps {
  cart: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
}

export default function CartPage({ cart, onBack, onUpdateQuantity, onRemove, onCheckout }: CartPageProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-[#FC9145] transition-transform hover:-translate-x-1"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>

          <div className="flex flex-col items-center justify-center py-16 text-center md:py-24">
            <ShoppingCart className="mb-6 h-20 w-20 text-[#333] md:h-24 md:w-24" />
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Your cart is empty</h3>
            <p className="mb-8 text-[#B3B3B3]">Add some amazing products to get started!</p>
            <Button
              onClick={onBack}
              className="rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] px-8 py-6 font-semibold transition-all hover:scale-105"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#FC9145] transition-transform hover:-translate-x-1 md:mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Continue Shopping</span>
        </button>

        <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl">
          Shopping Cart
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            <div className="space-y-4 rounded-2xl bg-[#1E1E26] p-4 md:p-6 lg:p-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="group grid grid-cols-[80px_1fr] gap-4 rounded-xl bg-black p-4 transition-all hover:translate-x-2 hover:border-l-4 hover:border-[#FC9145] md:grid-cols-[120px_1fr_auto] md:gap-6 md:p-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover md:h-28 md:w-28"
                  />

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-white md:mb-2 md:text-xl lg:text-2xl">
                        {item.name}
                      </h3>
                      <p className="mb-2 text-sm text-[#B3B3B3] md:text-base">{item.category}</p>
                      <div className="text-lg font-bold text-[#FC9145] md:text-xl lg:text-2xl">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-4">
                      <QuantitySelector
                        quantity={item.quantity}
                        onQuantityChange={(delta) => onUpdateQuantity(item.id, delta)}
                        compact
                      />
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-between gap-4 border-t border-[#333] pt-4 md:col-span-1 md:flex-col md:justify-center md:border-0 md:pt-0">
                    <div className="text-lg font-bold text-[#FC9145] md:text-xl lg:text-2xl">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                    <Button
                      onClick={() => onRemove(item.id)}
                      variant="destructive"
                      size="sm"
                      className="rounded-full bg-[#ff4444] hover:bg-[#cc0000]"
                    >
                      <Trash2 className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-[#1E1E26] p-6 text-center md:p-8">
              <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">Order Summary</h3>
              <p className="mb-4 text-[#B3B3B3]">Total Items: {totalItems}</p>
              <div className="mb-6 text-4xl font-bold text-[#FC9145] md:mb-8 md:text-5xl">
                ₹{total.toLocaleString()}
              </div>
              <Button
                onClick={onCheckout}
                className="w-full rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] py-6 text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(253,142,73,0.5)] md:py-7 md:text-xl"
              >
                <Lock className="mr-2 h-5 w-5" />
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
