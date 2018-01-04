import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { window } from 'rxjs/operators/window';
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
        var _this = this;
        this.lat = 31.6547339;
        this.lng = 35.1207842;
        this.locationChosen = false;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: 'נדב',
                draggable: true
            },
            {
                lat: this.lat + 0.005,
                lng: this.lng,
                label: 'A',
                draggable: true
            }
        ];
        navigator.geolocation.watchPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            console.log(_this.lat, " ", _this.lng);
        });
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
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    GoogleMapsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    GoogleMapsComponent.prototype.ngOnInit = function () { };
    GoogleMapsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-google-maps',
                    templateUrl: './google-maps.component.html',
                    styleUrls: ['./google-maps.component.css'],
                },] },
    ];
    /** @nocollapse */
    GoogleMapsComponent.ctorParameters = function () { return []; };
    return GoogleMapsComponent;
}());
export { GoogleMapsComponent };
