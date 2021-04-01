import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  config: any;
  dummyData=[]
  constructor() { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 10
    };
  }

  pageChanged(event:any){
    this.config.currentPage = event;
  }
}
