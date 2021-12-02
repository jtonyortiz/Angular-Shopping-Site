import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  offers: any = [
    {
      id: 110,
      images: 'https://i.ebayimg.com/images/g/AZQAAOSwhT9gWlts/s-l225.jpg',
      item: 'Waterproof Case',
      newprice: 16.98,
      price: 26.98,
      discount: 10.00,
    },
    {
      id: 120,
      images: 'https://i.ebayimg.com/images/g/bEAAAOSwamRdHn3n/s-l225.jpg',
      item: 'Mens SportsWear',
      newprice:  57.88,
      price:  45.88,
      discount: 12,
    },
    {
      id: 130,
      images: 'https://i.ebayimg.com/images/g/lTcAAOSwXFNgppgp/s-l225.jpg',
      item: 'HP Laptop',
      newprice: 399.99,
      price: 415.99,
      discount: 16.00,
    },
    {
      id: 140,
      images: 'https://i.ebayimg.com/images/g/BKgAAOSwBr5hEWKk/s-l300.jpg',
      item: 'Asus Laptop',
      newprice: 1549.99,
      price: 1249.99,
      discount: 300.00,
    },
    {
      id: 150,
      images: 'https://i.ebayimg.com/images/g/o-IAAOSwUWtb-ufH/s-l300.jpg',
      item: 'Citizen Watch',
      newprice: 118.99,
      price: 264.99,
      discount: 146.00,
    },
    {
      id: 160,
      images: 'https://i.ebayimg.com/images/g/C4QAAOSwaONf-FJ2/s-l300.jpg',
      item: 'Finance Book',
      newprice: 12.99,
      price: 14.99,
      discount: 2.00,
    },
    {
      id: 170,
      image: 'https://i.ebayimg.com/images/g/N~IAAOSw2ptb9Q2B/s-l225.jpg',
      item: 'Bates 1802 ',
      newprice: 120.99,
      price: 130.99,
      discount: 10.00,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
