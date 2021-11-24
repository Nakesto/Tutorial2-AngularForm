import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  fname = localStorage.getItem('fname');
  lname = localStorage.getItem('lname');
  nim = localStorage.getItem('nim');
  email = localStorage.getItem('email');

  ngOnInit(): void {
  }

}
