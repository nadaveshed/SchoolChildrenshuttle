import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../services/map/map.service';
import { Subscription } from 'rxjs';
import { RouterLink, Router } from '@angular/router';
import { UserLocationView, UserLocation } from '../models/user-location.model';
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent(mapService) {
        /*navigator.geolocation.watchPosition(position=>{
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
              console.log(this.lat, " " ,this.lng)
            });*/
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
    GoogleMapsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    GoogleMapsComponent.prototype.mapClicked = function ($event) {
        // this.markers.push({
        //   lat: $event.coords.lat,
        //   lng: $event.coords.lng,
        //   draggable: true
        // });
    };
    GoogleMapsComponent.prototype.markerDragEnd = function (m, $event) {
        //console.log('dragEnd', m, $event);
        console.log(m.label, $event.coords.lat, $event.coords.lng);
    };
    //  = [{
    //   // draggable: false,
    //   lat: 31.7766,
    //   lng: 35.2
    // }];
    //  = [{
    //   // draggable: false,
    //   lat: 31.7766,
    //   lng: 35.2
    // }];
    GoogleMapsComponent.prototype.ngOnInit = 
    //  = [{
    //   // draggable: false,
    //   lat: 31.7766,
    //   lng: 35.2
    // }];
    function () {
        var _this = this;
        // if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = 31.776629; //position.coords.latitude;
            _this.lng = 35.2000724; //position.coords.longitude;
            console.log("my location: ", _this.lat, _this.lng);
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
            console.log(res);
        });
        this.mapService.getSocketUpdate();
        console.log("start follow");
    };
    GoogleMapsComponent.prototype.ngOnDestroy = function () {
        // this.mapService.currLocation.unsubscribe();
        console.log("goodby");
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
