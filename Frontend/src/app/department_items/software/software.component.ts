import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
})
export class SoftwareComponent implements OnInit {
  software: any = [
    {
      id: 31,
      images: 'https://www.gannett-cdn.com/-mm-/0e422e4a7e951800d133d6d73b6439e7762ee2f7/c=0-0-2048-1155/local/-/media/USATODAY/USATODAY/2014/03/12//1394637083000-AFP-US-MICROSOFT-WINDOWS-XP-2579679.JPG',
      item: 'Windows XP',
      price: 199.00,
    },
    {
      id: 32,
      images: 'https://www.discorpshop.com/autoimg/2826297/600x400/ffffff/norton-360-premium.jpg',
      item: 'Norton Antivirus',
      price: 19.99,
    },
    {
      id: 33,
      images: 'https://www.thoughtco.com/thmb/K-sQct6IbwC6qTp3NCoppo_kD9I=/399x322/filters:no_upscale():max_bytes(150000):strip_icc()/2-56ac804e5f9b58b7d00ab17b.gif',
      item: 'Borland C++ Compiler',
      price: 70.00,
    },
    {
        id: 34,
        images: 'https://blog.radware.com/wp-content/uploads/2020/03/vpn.jpg',
        item: 'VPN',
        price: 10.00,
    },
    {
        id: 35,
        images: 'https://www.nicepng.com/png/detail/407-4075705_photoshop-photoshop-cs6-png-logo.png',
        item: 'Adobe Photoshop',
        price: 99.99,
    },
    {
        id: 36,
        images: 'https://images-na.ssl-images-amazon.com/images/I/518Xz2HlmJL._AC._SR360,460.jpg',
        item: 'Typing Software',
        price: 20.00,
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
