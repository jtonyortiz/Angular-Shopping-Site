import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})

//Departments:
//
//id: number - listed by hundreds strating from 100 : 100, 200, 300, ....
//images: image-file for each department
//department: string - Tells Department Type (Electornics, Computers.. etc.)
//
export class DepartmentsComponent implements OnInit {
  departments: any = [
    {
      id: 100,
      images:
        'https://i0.wp.com/www.dailyneeds247.com/wp-content/uploads/2020/05/shopping-Banner-1024x427-1.jpg',
      department: 'Daily Needs',
    },
    {
      id: 200,
      images:
        'http://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg',
      department: 'Electronics',
    },
    {
      id: 300,
      images:
        'https://thumbs.dreamstime.com/z/kitchen-utensils-sketch-cooking-tools-pan-knife-fork-spoon-grater-cup-glass-cutting-board-hand-drawing-kitchen-164207393.jpg',
      department: 'Kitchen',
    },
    {
      id: 400,
      images:
        'https://www.collinsdictionary.com/images/full/computer_49399603.jpg',
      department: 'Computers',
    },
    {
      id: 500,
      images:
        'https://images.saymedia-content.com/.image/t_share/MTc0MDAyNjI5MzQzNDU0NTE1/how-to-sell-books-online-and-make-money.jpg',
      department: 'Books',
    },
    {
      id: 600,
      images:
        'https://image.shutterstock.com/image-vector/software-web-development-programming-concept-260nw-1122339353.jpg',
      department: 'Software',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
