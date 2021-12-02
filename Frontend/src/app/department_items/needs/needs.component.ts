import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css'],
})
export class NeedsComponent implements OnInit {
  needs: any = [
    {
      id: 25,
      images:
        'https://www.discountcoffee.com/media/catalog/product/cache/dd917f5fa5c6ef77f6921b5e47bbbf2b/w/h/white-paper-lunch-napkins.jpg',
      item: 'Napkins',
      price: 2.00
    },
    {
      id: 26,
      images: 'https://www.keeptruckeegreen.org/wp-content/uploads/2020/09/12-3.png',
      item: 'Paper Towels',
      price: 2.45
    },
    {
      id: 27,
      images: 'https://i.guim.co.uk/img/media/759467eb633b61ba0f1c64f1acf0dd2a7120920d/0_0_3888_2333/master/3888.jpg?width=620&quality=85&auto=format&fit=max&s=e0c6ab3a974471596f5aa772d7b4ad10',
      item: 'Plastic Silverware',
      price: 1.50
    },
    {
      id: 28, 
      images: 'https://m.media-amazon.com/images/I/71qSenwbaPL._SX522_.jpg',
      item: 'Topperware Set',
      price: 15.00
    },
    {
      id: 29,
      images: 'https://m.media-amazon.com/images/I/71mePuSJBdL._AC_SX466_.jpg',
      item: 'Large Bathroom Rug',
      price: 44.00
    },
    {
      id: 30, 
      images: 'https://static.fully.com/image/upload/c_limit,dpr_2.0,f_auto,h_700,q_auto,w_700/v1/media/catalog/product/f/u/fully-jarvis-standing-desk-black-bamboo-contour-c-v1.jpg',
      item: 'Adjustable Desk',
      price: 557.00
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
