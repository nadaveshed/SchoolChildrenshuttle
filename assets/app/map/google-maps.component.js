import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../services/map/map.service';
import { Subscription } from 'rxjs';
import { RouterLink, Router } from '@angular/router';
import { UserLocationView, UserLocation } from '../models/user-location.model';
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent(mapService) {
        this.mapService = mapService;
        this.locationChosen = false;
        this.startf = true;
        this.stopf = false;
        this.markers = [];
    }
    GoogleMapsComponent.prototype.onChoseLocation = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.locationChosen = true;
    };
    GoogleMapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = 31.776629; //position.coords.latitude;
            _this.lng = 35.2000724; //position.coords.longitude;
            //console.log("my location: ", this.lat, this.lng);
        });
        this.subscripition = this.mapService.locationUpdates.subscribe(function (loc) {
            if (!_this.markers.find(function (u) { return u.userId === loc.userId; })) {
                //debugger
                //debugger
                _this.markers.push(new UserLocationView(loc));
            }
            else {
                //debugger
                var i = _this.markers.findIndex(function (u) { return u.userId === loc.userId; });
                _this.markers.splice(i, 1);
                _this.markers.push(new UserLocationView(loc));
            }
            console.log(_this.markers);
        });
    };
    GoogleMapsComponent.prototype.startFollow = function () {
        this.mapService.currLocation.subscribe(function (res) {
            //console.log(res)
        });
        this.mapService.getSocketUpdate();
        console.log("start follow");
    };
    GoogleMapsComponent.prototype.ngOnDestroy = function () {
        this.mapService.stopFollow();
    };
    GoogleMapsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-google-maps',
                    templateUrl: './google-maps.component.html',
                    styleUrls: ['./google-maps.component.css'],
                },] },
    ];
    /** @nocollapse */
    GoogleMapsComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    return GoogleMapsComponent;
}());
export { GoogleMapsComponent };
