import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})

export class GoogleMapsComponent implements OnInit {
  lat: number = 31.6547339;
  lng: number = 35.1207842;
  locationChosen = false;
  
  constructor() {
    navigator.geolocation.watchPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(this.lat, " " ,this.lng)
    });

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
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
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
  ]


  ngOnInit() {  }
}


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
