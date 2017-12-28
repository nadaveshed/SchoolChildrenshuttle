import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})

export class GoogleMapsComponent implements OnInit {
  lat: number = 31.6547339;
  lng: number = 35.1207842;
  locationChosen = false;
  
  constructor() { }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  
  ngOnInit() {  }
}
