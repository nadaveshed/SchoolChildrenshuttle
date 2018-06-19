import { Component } from '@angular/core';
var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    // check if the user signin
    // check if the user signin
    MainpageComponent.prototype.isLoggedIn = 
    // check if the user signin
    function () {
        var isCollapsed = false;
        //console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') !== null) {
            //console.log(isCollapsed);
            isCollapsed = true;
        }
        return isCollapsed;
    };
    MainpageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'main-page',
                    templateUrl: './main-page.component.html',
                    styleUrls: ['./main-page.component.css'],
                },] },
    ];
    /** @nocollapse */
    MainpageComponent.ctorParameters = function () { return []; };
    return MainpageComponent;
}());
export { MainpageComponent };
