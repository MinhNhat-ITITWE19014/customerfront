import { Component } from '@angular/core';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.scss']
})
export class AdminproductComponent {
  selectedImage: string = 'assets/pimage1.png';

  changeImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }
}
