import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(router) {
        this.router = router;
        this.Edit = false;
    }
    ContactusComponent.prototype.onSubmit = function () {
        this.myForm.reset();
    };
    ContactusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'contact-us',
                    templateUrl: './contact-us.component.html',
                    styleUrls: ['./contact-us.component.css'],
                },] },
    ];
    /** @nocollapse */
    ContactusComponent.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return ContactusComponent;
}());
export { ContactusComponent };
