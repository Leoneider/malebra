import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions , NgxGalleryImage , NgxGalleryAnimation  } from 'ngx-gallery';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {     

    this.galleryOptions = [
  
      { "imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true,"imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true,
      "previewCloseOnClick": true, "previewCloseOnEsc": true,
      "imageArrows": false, "imageSwipe": true, "thumbnailsArrows": false, "thumbnailsSwipe": true, "previewSwipe": true,
      "imageAnimation": "slide",
      'imageAutoPlayInterval': 2000,
      // "previewFullscreen": true, "previewForceFullscreen": true,
      width: '100%',
      height: '500px',
      thumbnailsColumns: 8
    }
    ];

    this.galleryImages = [
      {
        
        small: 'assets/img/slider/gopro.jpg',
        medium: 'assets/img/slider/gopro.jpg',
        big: 'assets/img/slider/gopro.jpg'
      },
      {
        small: 'assets/img/slider/aoc.webp',
        medium: 'assets/img/slider/aoc.webp',
        big: 'assets/img/slider/aoc.webp'
      },
      {
        small: 'assets/img/slider/iphone.png',
        medium: 'assets/img/slider/iphone.png',
        big: 'assets/img/slider/iphone.png'
      },
      {
        small: 'assets/img/slider/azumi.jpg',
        medium: 'assets/img/slider/azumi.jpg',
        big: 'assets/img/slider/azumi.jpg'
      },
      {
        small: 'assets/img/slider/asus.jpg',
        medium: 'assets/img/slider/asus.jpg',
        big: 'assets/img/slider/asus.jpg'
      },    
      {
        small: "assets/img/slider/gopro.jpg",
        medium: "assets/img/slider/gopro.jpg",
        big: "assets/img/slider/gopro.jpg"
      },
      {
        small: 'assets/img/slider/tv.jpg',
        medium: 'assets/img/slider/tv.jpg',
        big: 'assets/img/slider/tv.jpg'
      },
      {
        small: 'assets/img/slider/antena.jpg',
        medium: 'assets/img/slider/antena.jpg',
        big: 'assets/img/slider/antena.jpg'
      }
        
    ];
  }
}