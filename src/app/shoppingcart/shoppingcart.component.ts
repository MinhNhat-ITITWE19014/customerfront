import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent {
  pictureImages: string[] = [
    'assets/ip14mb.png',
    'assets/ip14mw.png',
  ];
}
