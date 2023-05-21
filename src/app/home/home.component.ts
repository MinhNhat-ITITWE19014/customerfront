import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pictureImages: string[] = [
    'assets/pimage1.png',
    'assets/pimage2.png',
    'assets/pimage3.png',
    'assets/pimage4.png',
    'assets/pimage5.png'
  ];
}
