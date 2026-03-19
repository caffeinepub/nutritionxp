import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import NotificationModal from './components/storefront/NotificationModal';
import { Product, CartItem, Order } from './lib/types';

type Page = 'home' | 'detail' | 'cart' | 'orders';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('nutritionxp_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nutritionxp_cart', JSON.stringify(cart));
  }, [cart]);

  const navigateTo = (page: Page, product?: Product) => {
    setCurrentPage(page);
    if (product) {
      setCurrentProduct(product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const updateCartQuantity = (productId: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const checkout = () => {
    if (cart.length === 0) return;

    const order: Order = {
      orderNumber: 'ORD' + Date.now(),
      date: new Date().toLocaleString(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'Pending',
    };

    const orderHistory = JSON.parse(localStorage.getItem('nutritionxp_orders') || '[]');
    orderHistory.unshift(order);
    localStorage.setItem('nutritionxp_orders', JSON.stringify(orderHistory));

    setCart([]);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
    navigateTo('orders');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onNavigate={navigateTo}
        onScrollToSection={scrollToSection}
      />

      {currentPage === 'home' && <HomePage onViewDetail={(product) => navigateTo('detail', product)} />}

      {currentPage === 'detail' && currentProduct && (
        <ProductDetailPage
          product={currentProduct}
          onBack={() => navigateTo('home')}
          onAddToCart={(quantity) => {
            addToCart(currentProduct, quantity);
            navigateTo('cart');
          }}
        />
      )}

      {currentPage === 'cart' && (
        <CartPage
          cart={cart}
          onBack={() => navigateTo('home')}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
          onCheckout={checkout}
        />
      )}

      {currentPage === 'orders' && <OrdersPage onBack={() => navigateTo('home')} />}

      <Footer />

      <NotificationModal isOpen={showNotification} onClose={closeNotification} />
    </div>
  );
}

export default App;
