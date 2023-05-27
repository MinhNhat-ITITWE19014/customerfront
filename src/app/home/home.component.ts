import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pictureImages: string[] = [
    'assets/pimage1.png',
    'assets/pimage2.png',
    'assets/pimage3.png',
    'assets/pimage4.png',
    'assets/pimage5.png'
  ];
  products: Product[] = [];
  ipadProducts: Product[] = [];
  iphoneProducts: Product[] =[];
  macProducts: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts(5).subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );

    this.productService.listIpadProducts(5).subscribe(
      (ipadProducts: Product[]) => {
        this.ipadProducts = ipadProducts;
      },
      (error) => {
        console.error('Failed to fetch iPad products:', error);
      }
    );

    this.productService.listIphoneProducts(5).subscribe(
      (iphoneProducts: Product[]) => {
        this.iphoneProducts = iphoneProducts;
      },
      (error) => {
        console.error('Failed to fetch iPhone products:', error);
      }
    );
    this.productService.listMacProducts(5).subscribe(
      (macProducts: Product[]) => {
        this.macProducts = macProducts;
      },
      (error) => {
        console.error('Failed to fetch Mac products:', error);
      }
    );
  }
}
