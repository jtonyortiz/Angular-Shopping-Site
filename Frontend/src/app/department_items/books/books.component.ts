import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})

export class BooksComponent implements OnInit {
  books: any = [
    {
      id: 1,
      images: 'https://cellar-c2.services.clever-cloud.com/com-gebekafilms-www/uploads/2019/07/Viel-Homme-04.jpg',
      item: 'The Old Man & The Sea',
      price: 10.00,
    },
    {
      id: 2,
      images: 'https://i0.wp.com/keepingupwiththepenguins.com/wp-content/uploads/2019/05/Ulysses-James-Joyce-Book-Laid-on-Wooden-Table-Keeping-Up-With-The-Penguins.jpg?fit=735%2C1102&ssl=1',
      item: 'Ulysses',
      price: 9.00,
    },
    {
      id: 3,
      images: 'https://i5.walmartimages.com/asr/64917540-93dd-4022-af9f-db436163898e_1.fa347c16f25f26c5f4dbfb6cd5ef9bcc.jpeg',
      item: 'The Illiad & the Odyssey',
      price: 11.0,
    },
    {
        id: 4,
        images: 'https://images.dailyhive.com/20200618133548/1984-george-orwell.jpg',
        item: '1984',
        price: 13.00,
    },
    {
        id: 5,
        images: 'https://i.pinimg.com/originals/d2/62/b2/d262b2860fb0fd573fac8e3338fab8bc.jpg',
        item: 'The Running Man',
        price: 15.00,
    },
    {
        id: 6,
        images: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1540836575i/26517129._SX540_.jpg',
        item: 'The Time Machine',
        price: 7.00,
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}