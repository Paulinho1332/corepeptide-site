export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string | null;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Order = {
  id: number;
  userId: number;
  total: number;
  status: string;
  shippingAddress: string | null;
  billingAddress: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  createdAt: Date;
};
