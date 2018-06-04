import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { GoogleMapsComponent } from "./map/google-maps.component";
import { MainpageComponent } from "./mainpage/main-page.component";
import { ContactusComponent } from "./contact/contact-us.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'map', component: GoogleMapsComponent },
    { path: 'mainpage', component: MainpageComponent },
    { path: 'contact', component: ContactusComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

