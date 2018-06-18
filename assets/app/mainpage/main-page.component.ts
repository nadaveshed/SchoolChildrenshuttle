import { Component } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainpageComponent {
  constructor() {}
 
  // check if the user signin
  isLoggedIn() {
    var isCollapsed = false;
    //console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token') !== null)
    {
      //console.log(isCollapsed);
      isCollapsed = true;
    }
    return isCollapsed;
  }

}