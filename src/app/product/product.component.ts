import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  selectedImage: string = 'assets/pimage1.png';

  changeImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

}
