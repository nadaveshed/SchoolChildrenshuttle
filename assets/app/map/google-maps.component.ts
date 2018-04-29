import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../services/map/map.service';
import { Subscription } from 'rxjs';
import { UserLocationView, UserLocation } from '../models/user-location.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})

export class GoogleMapsComponent implements OnInit, OnDestroy {
  lat: number;// = 31.6547339;
  lng: number;// = 35.1207842;
  locationChosen = false;
  subscripition: Subscription;

  constructor(private mapService: MapService) {
    /*navigator.geolocation.watchPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(this.lat, " " ,this.lng)
    });*/

  }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    //console.log('dragEnd', m, $event);
    console.log(m.label, $event.coords.lat, $event.coords.lng);
  }

  markers: UserLocationView[] = []
  //  = [{
  //   // draggable: false,
  //   lat: 31.7766,
  //   lng: 35.2
  // }];

  ngOnInit() {
    // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = 31.776629; //position.coords.latitude;
        this.lng = 35.2000724; //position.coords.longitude;
        console.log(this.lat, "my location " ,this.lng);
      });
      this.subscripition = this.mapService.locationUpdates.subscribe((loc: UserLocation) => {
        if(!this.markers.find(u => u.userId === loc.userId))
          this.markers.push(new UserLocationView(loc))
        // this.markers.push({
        //   lat: +loc.lat,
        //   lng: +loc.lng,
        //   label: 'shalev',
        //   draggable: true
        // });
      });
  }

  ngOnDestroy(): void {
    this.subscripition.unsubscribe();
  }

  public startFollow() {
    var locationds;
    this.mapService.currLocation.subscribe(res => {

      console.log(res)
    });
    this.mapService.getSocketUpdate();
    locationds = this.mapService.currLocation;
    console.log("aaa");
  } 
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}