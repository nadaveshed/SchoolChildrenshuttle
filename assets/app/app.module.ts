import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from './messages/message.module';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './map/google-maps.component';
import { MapService } from './services/map/map.service';


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        GoogleMapsComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAl6MPCBdfXpffucV4RcmcYS7c2pG7eg40'
        }),
        BrowserModule,
        routing,
        HttpModule,
        MessageModule
    ],
    providers: [
        AuthService, 
        ErrorService,
        MapService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}