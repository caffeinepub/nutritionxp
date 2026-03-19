export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  orderNumber: string;
  date: string;
  items: CartItem[];
  total: number;
  status: string;
}

export interface Category {
  name: string;
  desc: string;
  image: string;
}

export interface Brand {
  name: string;
  image: string;
}
