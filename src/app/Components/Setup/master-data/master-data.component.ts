import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Master Data!")
  }

}
