import { Product } from './product';

export interface ShoppingCart {
  cartID: number;
  productQuantity: number;
  product: Product;
}
