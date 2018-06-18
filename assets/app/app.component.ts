import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    isCollapsed = true;

    isLoggedIn() {
        var login = false;
        //console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token') !== null)
        {
          //console.log(login);
          login = true;
        }
        return login;
      }

    
}