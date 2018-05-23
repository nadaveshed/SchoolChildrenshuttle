import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import * as io from 'socket.io-client';
import { UserLocation } from "../../models/user-location.model";
import { Http, Headers } from "@angular/http";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class MapService {
    private _myLoc: { lat: number, lng: number } = {
        lat : 0 ,
        lng : 0
    }
    public locationUpdates: Subject<any> = new Subject();
    private _currLocation: ReplaySubject<{ lat: number, lng: number }> = new ReplaySubject();
    private startFollow: boolean = false;
    constructor(private http: Http, private authService: AuthService) { }

    private followMe() {
        this.startFollow = true;
        navigator.geolocation.watchPosition(position => {
            this._currLocation.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            this._myLoc.lat = position.coords.latitude
            this._myLoc.lng = position.coords.longitude
            this.postMyLocation()

        }, err => {
            console.log(err)
        }, { enableHighAccuracy: true, timeout: 5000 })
    }

    public get currLocation() {         //start the follow me func if not started
        if (!this.startFollow)
            this.followMe();
        return this._currLocation;
    }

    postMyLocation() {
        console.log(this.authService.userId)
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/map/sendLocation', new UserLocation(
            this._myLoc.lat,
            this._myLoc.lng,
            this.authService.userId), { headers: headers }).subscribe(res => { })
    }

    public getSocketUpdate() {
        var loca;
        console.log(window["origin"])
        const socket = io.connect(window["origin"]);
        socket.on('connect', function () { console.log("connect successfull") });;
        socket.on("send-location", (loc: UserLocation) => {
            console.log("server position:");
            console.log(loc);
            loca = loc.lat;
            console.log(loc.lat);
            this.locationUpdates.next(loc);
        })
    }
    public stopFollow() {
        console.log("stoped follow");
    }
}