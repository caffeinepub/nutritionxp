import { ArrowLeft, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Order } from '../lib/types';

interface OrdersPageProps {
  onBack: () => void;
}

export default function OrdersPage({ onBack }: OrdersPageProps) {
  const orderHistory: Order[] = JSON.parse(localStorage.getItem('nutritionxp_orders') || '[]');

  if (orderHistory.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-[#FC9145] transition-transform hover:-translate-x-1"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col items-center justify-center py-16 text-center md:py-24">
            <Receipt className="mb-6 h-20 w-20 text-[#333] md:h-24 md:w-24" />
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">No orders yet</h3>
            <p className="mb-8 text-[#B3B3B3]">Your order history will appear here once you place your first order.</p>
            <Button
              onClick={onBack}
              className="rounded-full bg-gradient-to-r from-[#FD8E49] to-[#fc8004] px-8 py-6 font-semibold transition-all hover:scale-105"
            >
              Start Shopping
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
          <span>Back to Home</span>
        </button>

        <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl">
          Order History
        </h2>

        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div
              key={order.orderNumber}
              className="overflow-hidden rounded-2xl border border-[#333] bg-[#1E1E26] p-4 transition-all hover:-translate-y-1 hover:border-[#FC9145] md:p-6 lg:p-8"
            >
              {/* Order Header */}
              <div className="mb-6 flex flex-col gap-4 border-b border-[#333] pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 text-xl font-bold text-[#FC9145] md:text-2xl">{order.orderNumber}</div>
                  <div className="text-sm text-[#B3B3B3]">{order.date}</div>
                </div>
                <span className="inline-block w-fit rounded-full bg-[#2ecc71] px-5 py-2 text-sm font-semibold text-white">
                  {order.status}
                </span>
              </div>

              {/* Order Items */}
              <div className="mb-6 space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[60px_1fr] gap-4 rounded-xl bg-black p-3 md:grid-cols-[80px_1fr_auto_auto] md:gap-6 md:p-4"
                  >
                    <img src={item.image} alt={item.name} className="h-14 w-14 rounded-lg object-cover md:h-20 md:w-20" />
                    <div>
                      <div className="mb-1 text-sm font-semibold text-white md:text-base">{item.name}</div>
                      <div className="text-xs text-[#B3B3B3] md:text-sm">Quantity: {item.quantity}</div>
                    </div>
                    <div className="col-start-2 text-sm font-bold text-[#FC9145] md:col-start-auto md:text-base lg:text-lg">
                      ₹{item.price.toLocaleString()}
                    </div>
                    <div className="text-sm font-bold text-[#FC9145] md:text-base lg:text-lg">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="flex items-center justify-between border-t border-[#333] pt-6 text-xl font-bold md:text-2xl">
                <span className="text-white">Total Amount:</span>
                <span className="text-[#FC9145]">₹{order.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
