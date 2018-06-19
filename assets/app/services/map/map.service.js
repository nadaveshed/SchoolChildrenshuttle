import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import * as io from 'socket.io-client';
import { UserLocation } from "../../models/user-location.model";
import { Http, Headers } from "@angular/http";
import { AuthService } from "../../auth/auth.service";
import { Socket } from "net";
var MapService = /** @class */ (function () {
    function MapService(http, authService) {
        this.http = http;
        this.authService = authService;
        this._myLoc = {
            lat: 0,
            lng: 0
        };
        this.locationUpdates = new Subject();
        this._currLocation = new ReplaySubject();
        this.startFollow = false;
    }
    MapService.prototype.followMe = function () {
        var _this = this;
        this.startFollow = true;
        navigator.geolocation.watchPosition(function (position) {
            _this._currLocation.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            _this._myLoc.lat = position.coords.latitude;
            _this._myLoc.lng = position.coords.longitude;
            _this.postMyLocation();
        }, function (err) {
            //console.log(err)
        }, { enableHighAccuracy: true, timeout: 5000 });
    };
    Object.defineProperty(MapService.prototype, "currLocation", {
        get: function () {
            //start the follow me func if not started
            if (!this.startFollow)
                this.followMe();
            return this._currLocation;
        },
        enumerable: true,
        configurable: true
    });
    MapService.prototype.postMyLocation = function () {
        //console.log(this.authService.userId)
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://sds-app.herokuapp.com/map/sendLocation', new UserLocation(
        //return this.http.post('http://localhost:3000/map/sendLocation', new UserLocation(
        this._myLoc.lat, this._myLoc.lng, this.authService.userId), { headers: headers }).subscribe(function (res) { });
    };
    MapService.prototype.getSocketUpdate = function () {
        var _this = this;
        //console.log(window["origin"])
        var socket = io.connect(window["origin"]);
        socket.on('connect', function () { console.log("connect successfull"); });
        socket.on("send-location", function (loc) {
            //console.log("server position: ", loc.lat, loc.lng);
            //console.log("server position: ", loc.lat, loc.lng);
            _this.http.post('https://sds-app.herokuapp.com/user/getByName/', { _id: loc.userId }, {
                //this.http.post('http://localhost:3000/user/getByName/', { _id: loc.userId }, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).subscribe(function (user) {
                loc.userName = user.json().username;
                //console.log(user.json());
                //console.log(user.json());
                _this.locationUpdates.next(loc);
            });
        });
    };
    MapService.prototype.stopFollow = function () {
        // var nsp = io.of('/');
        // nsp.removeListener('connection', window["origin"]);
        console.log("stopped follow");
    };
    MapService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MapService.ctorParameters = function () { return [
        { type: Http, },
        { type: AuthService, },
    ]; };
    return MapService;
}());
export { MapService };
