var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { google } from '@agm/core/services/google-maps-types';
// import { GoogleMapsAPIWrapper } from '@agm/core';
// import { $$, EventEmitter } from 'protractor';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyWayPoints';
        this.minZoom = 3;
        this.maxZoom = 20;
        this.origin = "";
        this.destination = "";
        this.travelMode = "DRIVING";
        // waypoints: object = [
        //   {
        //     location: { lat: this.waypointLat, lng: this.waypointLong },
        //     stopover: false,
        //   },
        // ]
        // public makeWaypoint(event) {
        //   this.waypointLat= event.lat;
        //   this.waypointLong=event.lng;
        // }
        this.renderOptions = {
            suppressMarkers: true,
        };
        this.markerOptions = {
            origin: {
                infoWindow: "\n      <strong>Today the weather is:</strong>\n      <p>" + this.sunCond + "</p>\n      <p> Hi: " + this.hi + "</p>\n      <p> Lo: " + this.low + "</p>\n      "
            },
            destination: {
                infoWindow: "\n      <strong>Today the weather is:</strong>\n      <p>" + this.sunCond + "</p>\n      <p> Hi: " + this.hi + "</p>\n      <p> Lo: " + this.low + "</p>\n      "
            },
        };
    }
    AppComponent.prototype.makeRoute = function (loc) {
        this.origin = loc[0];
        this.destination = loc[1];
        if (loc[2] == undefined) {
            this.travelMode = 'DRIVING';
        }
        else {
            this.travelMode = loc[2];
        }
    };
    AppComponent.prototype.onResponse = function (event) {
        console.log(event);
        if (event.status == "NOT_FOUND") {
            console.log("shit dont work");
        }
        else {
            console.log("shit dont never stop");
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        // @Output() onResponse: EventEmitter<any> = new EventEmitter();
        ,
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
// markers: marker[] = [{
//   lat: 42.8864,
//   long: -78.8784,
//   hi: 29,
//   low: 10,
//   sunCond: 'cloudy'
// }]
// }
// interface marker {
//   lat: number;
//   long: number;
//   hi: number;
//   low: number;
//   sunCond: string;
// }
//# sourceMappingURL=app.component.js.map