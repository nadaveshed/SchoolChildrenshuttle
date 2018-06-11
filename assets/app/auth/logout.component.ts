import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2" style="margin-top:40px">
            <button class="btn btn-danger" (click)="onLogout()" style="font-size: 30px">Logout</button>
        </div>
    `
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}