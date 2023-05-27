import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ShoppingCart } from '../interface/shoppingcart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private router:Router,
  ) { }

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
  addToCart(): void {
    if (!this.product) {

      console.error('Product is undefined');
      return;
    }
    const cartItem: ShoppingCart = {
      cartID: 0,          // init cartID
      productQuantity: 1, // assign the desired product quantity
      product: this.product // assign the selected product
    };

    this.shoppingCartService.createCart(cartItem).subscribe(
      (response) => {
        console.log('Cart created successfully:', response);
        // an redirect function to take the parameter of the cartID
        //  this.router.navigate(['/cart', response.cartID]); // ** INCOMPLETE
      },
      (error) => {
        console.error('Failed to create cart:', error);
        // handle error case
      }
    );
  }


}
