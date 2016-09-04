import { Component} from '@angular/core';

@Component({
    selector: 'google-maps-component',
    template: `
        <sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>
    `
})
export class GoogleMapComponent{
    lat: number = 44.3;
	lng: number = 33.2;
}
