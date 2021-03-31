import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowMenuService {

  showHideMenu = new BehaviorSubject(true)

  constructor() { }

  setShowHideMenu(showhideMenuFlag:any){
    this.showHideMenu.next(showhideMenuFlag)
  
  }
}
