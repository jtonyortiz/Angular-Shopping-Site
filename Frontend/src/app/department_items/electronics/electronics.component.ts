import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})

export class ElectronicsComponent implements OnInit {
  electronics: any = [
    {
      id: 13,
      images: 'https://m.media-amazon.com/images/I/61Mie8CpqsL._AC_SL1200_.jpg',
      item: 'DVD Player',
      price: 44.00,
    },
    {
      id: 14,
      images: 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/110301-zklxapdcqo-1547127551.jpg',
      item: 'Digital Camera',
      price: 449.00,
    },
    {
      id: 15,
      images: 'https://www.getsview.com/wp-content/uploads/2019/02/LG-32-inch-Smart-HD-TV-Price-Bangladesh.jpg',
      item: 'UHD Television',
      price: 720.00,
    },
    {
      id: 16,
      images: 'https://assets.teenvogue.com/photos/5b9973fff042bc5249ab1408/16:9/w_1280,c_limit/iphone-xr-colors-fb.jpg',
      item: 'iPhone XR',
      price: 660.00,
    },
    {
      id: 17, 
      images: 'https://cdn.shopify.com/s/files/1/0563/0728/6186/products/45_abd0b3d1-093d-4e58-99da-7bf8dcb10f63_2048x2048.png?v=1630483961',
      item: 'Turntable LP',
      price: 250.00
    },
    {
      id: 18, 
      images: 'https://www.memoryc.com/images/products/bb/SJ25H3P_Side_Right_44896.jpg',
      item: '1 TB HD',
      price: 80.00
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
