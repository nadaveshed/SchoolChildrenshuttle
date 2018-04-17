import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import * as io from 'socket.io-client';

@Injectable()
export class MapService {
    private _currLocation: ReplaySubject<{ lat: number, lng: number }> = new ReplaySubject();
    private startFollow: boolean = false;
    constructor() { }

    private followMe() {
        this.startFollow = true;
        navigator.geolocation.watchPosition(position => {
            this._currLocation.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }, err => {
            console.log(err)
        }, {enableHighAccuracy: true , timeout: 5000})
    }

    public get currLocation() {         //start the follow me func if not started
        if (!this.startFollow)
            this.followMe();
        return this._currLocation;
    }

    public getSocketUpdate(){
        console.log(window["origin"])
        const socket = io.connect(window["origin"]);
        socket.on('connect', function(){console.log("connect successfull")});;
        socket.on("send-location", (loc)=>{
            console.log("server position:");
            console.log(loc);
        })
    }
    public stopFollow(){
        console.log("stoped follow");
    }
}