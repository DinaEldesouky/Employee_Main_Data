import { Component, OnInit } from '@angular/core';
declare const sizing: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee_index';

  constructor() { }

  ngOnInit() {
    sizing();
    
  }
}
