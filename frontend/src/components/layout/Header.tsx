import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  cartCount: number;
  onNavigate: (page: 'home' | 'detail' | 'cart' | 'orders') => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ cartCount, onNavigate, onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', action: () => onNavigate('home') },
    { label: 'Shop', action: () => onScrollToSection('products') },
    { label: 'Goals', action: () => onScrollToSection('categories') },
    { label: 'About', action: () => onScrollToSection('about') },
    { label: 'Orders', action: () => onNavigate('orders') },
    { label: 'Contact', action: () => onScrollToSection('contact') },
  ];

  const handleNavClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-[rgba(11,11,15,0.95)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(11,11,15,0.95)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://instasize.com/api/image/b0e2426687abd8cb722c1532731ddab8925659a72793c6f6c6bd7e1fa1f1c8f3.png"
            alt="NutritionXP"
            className="h-14 w-auto cursor-pointer rounded-none transition-transform hover:scale-105 md:h-16 lg:h-[70px]"
            onClick={() => onNavigate('home')}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-[#FC9145] xl:text-base"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate('cart')}
            className="relative transition-transform hover:scale-110"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-6 w-6 text-[#FC9145] xl:h-7 xl:w-7" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0B0B0F] bg-[#FC9145] text-xs font-bold text-white animate-pulse xl:h-6 xl:w-6">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => onNavigate('cart')}
            className="relative transition-transform hover:scale-110"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-6 w-6 text-[#FC9145]" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0B0B0F] bg-[#FC9145] text-xs font-bold text-white animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#1E1E26]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] border-l border-[#222] bg-[#0B0B0F] sm:w-[320px]">
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#FC9145]">Menu</h2>
                  <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#FC9145]">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.action)}
                      className="rounded-lg px-4 py-3 text-left text-base font-medium transition-colors hover:bg-[#1E1E26] hover:text-[#FC9145]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
