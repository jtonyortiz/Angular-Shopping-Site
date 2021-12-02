import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
})

export class ComputersComponent implements OnInit {
  computers: any = [
    {
      id: 7,
      images: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzM0NjI1fGltYWdlL3BuZ3xoNzAvaDQ5LzEwNzg2MTI5MzQ2NTkwLnBuZ3wyZjUyMGRiMjk2N2JkN2UyNGU4ODg4ZjRhZjY0MzkzNWYwM2E1MjFkMjcwYzc2M2I1ZTg1NjdkZTg4YjE2ZDM2/lenovo-laptop-yoga-duet-7-subseries-hero.png',
      item: 'Lenovo Yoga Laptop',
      price: 1055.00,
    },
    {
      id: 8,
      images: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--dETuqOsu--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/804a0dfba65143b4/Shot_by_JR_-_2.jpg',
      item: 'Apple Mac Mini',
      price: 799.99,
    },
    {
      id: 9,
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fbEY3ic1HNutCuKE9iAYqMCxop1OEoZTZyzPyFbKYSrMQ6GBNXtSWJeAgNn5zs5BNIE&usqp=CAU',
      item: 'Acer Gaming Laptop',
      price: 2995.00,
    },
    {
        id: 10,
        images: 'https://www.distrelec.biz/Web/WebShopImages/landscape_large/9-/01/Raspberry%20Pi-PI4%20MODEL%20B_1GB-30152779-01.jpg',
        item: 'Raspberry Pi',
        price: 99.00,
    },
    {
        id: 11,
        images: 'https://i5.walmartimages.com/asr/142d29c4-fb7e-4abd-8383-39466511baf0.cd550ac5ada74a9d2859208a4b214bf1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        item: 'Acer Tablet',
        price: 205.00,
    },
    {
        id: 12,
        images: 'https://icdn.digitaltrends.com/image/digitaltrends/microsoftsurfacepro7-7-625x417-c.jpg',
        item: 'Surface Pro',
        price: 559.00,
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}