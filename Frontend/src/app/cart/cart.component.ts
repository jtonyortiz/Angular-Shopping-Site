import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
    totalPrice: number = 0;
    numItems: number = 0;
    constructor() {}

    ngOnInit(): void {}
}
