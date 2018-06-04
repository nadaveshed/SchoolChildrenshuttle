import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterLink, Router } from '@angular/router';
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
import { NguiMapModule } from '@ngui/map';
import { MainpageComponent } from './mainpage/main-page.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthenticationComponent,
                        HeaderComponent,
                        ErrorComponent,
                        GoogleMapsComponent,
                        MainpageComponent
                    ],
                    imports: [
                        NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAl6MPCBdfXpffucV4RcmcYS7c2pG7eg40' }),
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
