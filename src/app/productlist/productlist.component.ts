import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts(20).subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      (result: boolean) => {
        if (result) {
          // Product successfully deleted
          // You can perform any necessary actions (e.g., show a success message, refresh the product list)
          this.fetchProducts();
        } else {
          // Product deletion failed
          // You can handle the error accordingly
          console.error('Failed to delete product:', productId);
        }
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
