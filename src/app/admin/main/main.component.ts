import { Component, OnInit } from '@angular/core';
import { ShowMenuService } from '../service/show-menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showHideMenuFlag:boolean =true
  constructor(private showMenuService:ShowMenuService) { }

  ngOnInit(): void {
    this.showMenuService.showHideMenu.subscribe(flag=>{
      this.showHideMenuFlag = flag
    })
  }

}
