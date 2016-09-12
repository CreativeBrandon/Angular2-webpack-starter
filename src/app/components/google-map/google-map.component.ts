import { Component, Injectable, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

@Component({
    selector: 'google-maps-component',
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }
    `],
    template: `
        <sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>
    `
})
@Injectable()
export class GoogleMapComponent implements OnInit{
    lat: number = 43.65;
	lng: number = -79.38;

    constructor(){}

    ngOnInit(){
        console.log('google maps component');
        //this.gmaps.getNativeMap().then(map => console.log(map));
    }
}
