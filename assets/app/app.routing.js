import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { GoogleMapsComponent } from "./map/google-maps.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'map', component: GoogleMapsComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
