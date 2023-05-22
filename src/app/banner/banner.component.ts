import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
  export class BannerComponent implements OnInit {
    bannerImages: string[] = [
      'assets/image1.png',
      'assets/image2.png',
      'assets/image3.png',
      'assets/image4.png',
      'assets/image5.png',
      'assets/image6.png'
    ];
    currentImageIndex = 0;
  
    ngOnInit() {
      setInterval(() => {
        this.showNextImage();
      }, 5000);
    }
  
    showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.bannerImages.length;
    }
  }

