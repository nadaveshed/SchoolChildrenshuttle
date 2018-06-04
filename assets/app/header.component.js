import { Component } from "@angular/core";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n        <header class=\"row\">\n        <!--<nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['/mainpage']\">Main</a></li>\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Authentication</a></li>\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['/map']\">Map</a></li>\n\n                    <li routerLinkActive=\"deactive\"><a [routerLink]=\"['/auth/logout']\">logout</a></li>\n                </ul>\n            </nav> -->  \n            \n            <!-- Navigation -->\n            <nav id=\"siteNav\" class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n                <div class=\"container\">\n                    <!-- Logo and responsive toggle -->\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                    </div>\n                    <!-- Navbar links -->\n                    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li class=\"active\">\n                                <a href=\"/mainpage\">Home</a>\n                            </li>\n                            <li>\n                                <a href=\"/map\">Map</a>\n                            </li>\n                            <li class=\"dropdown\">\n                                <a href=\"/auth/signin\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Login<span class=\"caret\"></span></a>\n                                <ul class=\"dropdown-menu\" aria-labelledby=\"about-us\">\n                                    <li><a href=\"/auth/signup\">Signup</a></li>\n                                    <li><a href=\"#\">Logout</a></li>\n                                </ul>\n                            </li>\n                            <li>\n                                <a href=\"#\">Contact</a>\n                            </li>\n                        </ul>\n                        \n                    </div><!-- /.navbar-collapse -->\n                </div><!-- /.container -->\n            </nav>\n        </header>\n    "
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    return HeaderComponent;
}());
export { HeaderComponent };
//original lines
/*                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
<li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
<li routerLinkActive="active"><a [routerLink]="['/map']">Map</a></li>  */ 
