import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  streetAddress: string = "";

  constructor() {}

  ngOnInit(): void {}
}
