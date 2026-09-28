export interface AddToCartResponse {
  message: string;
  numOfCartItems: number;
  cartId: string;
  products: CartProduct[];
  totalCartPrice: number;
}

export interface CartProduct {
  count: number;
  price: number;
  product: {
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    category: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    priceAfterDiscount?: number;
  };
  _id: string;
}