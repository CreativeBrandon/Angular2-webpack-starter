import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'google-maps-component',
    template: `
        <sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>
    `
})
export class GoogleMapComponent implements OnInit{
    lat: number = 44.3;
	lng: number = 33.2;

    ngOnInit(){
        console.log('google maps component');
    }
}
