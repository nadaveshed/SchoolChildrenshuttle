import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../services/map/map.service';
import { Subscription } from 'rxjs';
import { RouterLink, Router } from '@angular/router';
import { UserLocationView, UserLocation } from '../models/user-location.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})

export class GoogleMapsComponent implements OnInit, OnDestroy {
  lat: number;
  lng: number;
  locationChosen = false;
  startf: boolean = true;
  stopf: boolean = false;
  subscripition: Subscription;

  constructor(private mapService: MapService) {
  }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }


  markers: UserLocationView[] = []

  ngOnInit() {
    // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = 31.776629; //position.coords.latitude;
        this.lng = 35.2000724; //position.coords.longitude;
        console.log("my location: ", this.lat, this.lng);
      });
      this.subscripition = this.mapService.locationUpdates.subscribe((loc: UserLocation) => {
        
        if(!this.markers.find(u => u.userId === loc.userId)){
          //debugger
          this.markers.push(new UserLocationView(loc))
        }
        else{
          //debugger
          let i = this.markers.findIndex(u => u.userId === loc.userId);
          this.markers.splice(i, 1);
          this.markers.push(new UserLocationView(loc))
        }
        console.log(this.markers)

      });
      
  }

  public startFollow() {
    this.mapService.currLocation.subscribe(res => {
      console.log(res)
    });
    this.mapService.getSocketUpdate();
    console.log("start follow");
  } 

  public ngOnDestroy() {
    // this.mapService.currLocation.unsubscribe();
    console.log("goodby");
  } 

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}