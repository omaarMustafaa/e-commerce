import { Category } from "@/components/CategoryCard/CategoryCard.interface";

export interface CartProduct {
  _id: string;
  count: number;
  price: number;
  product: {
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    category: Category;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    priceAfterDiscount?: number;
  };
}

export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface CartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}