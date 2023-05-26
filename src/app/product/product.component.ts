import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const idProduct = this.activatedRoute.snapshot.params['id'];
    this.fetchProduct(idProduct);
  }

  fetchProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error) => {
        console.error('Failed to fetch product:', error);
      }
    );
  }


}
