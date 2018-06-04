import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { GoogleMapsComponent } from "./map/google-maps.component";
import { MainpageComponent } from "./mainpage/main-page.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'map', component: GoogleMapsComponent },
    { path: 'mainpage', component: MainpageComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
