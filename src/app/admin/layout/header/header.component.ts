import { Component, OnInit } from '@angular/core';
import { ShowMenuService } from '../../service/show-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHideMenuFlag:boolean = true
  constructor(private showMenuService:ShowMenuService) { }

  ngOnInit(): void {
  }

  showhideMenu(){
    this.showHideMenuFlag =!this.showHideMenuFlag
    this.showMenuService.setShowHideMenu( this.showHideMenuFlag)
  }

}
