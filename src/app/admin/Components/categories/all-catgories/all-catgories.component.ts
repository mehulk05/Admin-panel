import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-catgories',
  templateUrl: './all-catgories.component.html',
  styleUrls: ['./all-catgories.component.css']
})
export class AllCatgoriesComponent implements OnInit {
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
