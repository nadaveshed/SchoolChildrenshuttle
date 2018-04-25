import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../services/map/map.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})

export class GoogleMapsComponent implements OnInit {
  lat: number;// = 31.6547339;
  lng: number;// = 35.1207842;
  locationChosen = false;

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
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    //console.log('dragEnd', m, $event);
    console.log(m.label, $event.coords.lat, $event.coords.lng);
  }

  markers: marker[] = [
    {
      lat: this.lat,
      lng: this.lng,
      label: 'A',
      draggable: true
    },
    {
      lat: this.lat,
      lng: this.lng,
      label: 'B',
      draggable: true
    }
  ]

  ngOnInit() {
    // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = 31.776629; //position.coords.latitude;
        this.lng = 35.2000724; //position.coords.longitude;
        console.log(this.lat, "my location " ,this.lng);
      });
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