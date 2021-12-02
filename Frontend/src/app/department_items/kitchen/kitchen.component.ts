import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})

export class KitchenComponent implements OnInit {
    kitchen: any = [
    {
      id: 19,
      images:
        'https://www.buckknives.com/images/products/hero/0930BKS6-B.jpg',
      item: '7-piece Cutlery Set',
      price: 324.00,
    },
    {
      id: 20,
      images: 'https://www.oxo.com/media/catalog/product/cache/c1ec3133c42ea2566566913f36920cb6/o/x/oxo_on_9-cup_coffee_maker_8710100_1b_1.jpg',
      item: '9-cup Coffee Maker',
      price: 225.00,
    },
    {
      id: 21,
      images: 'https://m.media-amazon.com/images/I/81wqACNnR3S._AC_SX522_.jpg',
      item: 'Microwave Oven',
      price: 98.00,
    },
    {
      id: 22,
      images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449505_rd.jpg;maxHeight=640;maxWidth=550',
      item: 'Instant Cooking Pot',
      price: 77.00,
    },
    {
      id: 23,
      images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6008/6008009_sd.jpg;maxHeight=640;maxWidth=550',
      item: 'Stand Mixer',
      price: 400.00,
    },   {
      id: 24,
      images: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/17745208_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1',
      item: 'Non-stick Cooking Set',
      price: 98.00,
    }

  ];

  constructor() {}

  ngOnInit(): void {}
}
