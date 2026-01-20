export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id?: string;
  customerName: string;
  phone: string;
  address: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status?: string;
  createdAt?: string;
}
