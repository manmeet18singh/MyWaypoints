import { Component } from '@angular/core';
import { WeatherService } from './weather.service'
import { WeatherPointsService } from './weather-points.service'
import { weatherpoint } from './weatherpoint.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  weatherPoint: weatherpoint[];

  constructor(private weatherService: WeatherService, private weatherPointService: WeatherPointsService, ) { }

  title = 'MyWayPoints';
  minZoom: number = 3;
  maxZoom: number = 20;

  origin: any = "";
  destination: any = "";
  travelMode: string = "DRIVING";
  oLat: number;
  oLong: number;
  dLat: number;
  dLng: number;

  originHi: number;
  originLow: number;
  originSunCond: string;

  destHi: number;
  destLow: number;
  destSunCond: string;

  m1Hi: number;
  m1Low: number;
  m1SunCond: string;

  m2Hi: number;
  m2Low: number;
  m2SunCond: string;

  firstMarkerLat: any = "";
  firstMarkerLng: any = "";
  secondMarkerLat: any = "";
  secondMarkerLng: any = "";

  //marker cosmetics
  public renderOptions = {
    suppressMarkers: true,
    opacity: 0,
  }

  //pass all origin and dest info to make polyline
  makeRoute(loc) {
    this.origin = loc[0];
    this.destination = loc[1];

    if (loc[2] == undefined) {
      this.travelMode = 'DRIVING';
    }
    else {
      this.travelMode = loc[2];
    }
  }

  //gets origin weather
  getOriginWeather() {
    this.weatherService.getWeather(this.oLat, this.oLong).subscribe((weather: any) => {
      this.originSunCond = weather.weather[0].main;
      this.originHi = weather.main.temp_max;
      this.originLow = weather.main.temp_min;
      this.addWeatherPoint(this.oLat, this.oLong, this.originSunCond, this.originHi, this.originLow);
    });
  }

  //gets dest weather
  getDestWeather() {
    this.weatherService.getWeather(this.dLat, this.dLng).subscribe((weather: any) => {
      this.destSunCond = weather.weather[0].main;
      this.destHi = weather.main.temp_max;
      this.destLow = weather.main.temp_min;
      this.addWeatherPoint(this.dLat, this.dLng, this.destSunCond, this.destHi, this.destLow);
    });
  }

  //get midpoint information
  public onChange(event: any) {
    this.oLat = event.routes[0].legs[0].start_location.lat();
    this.oLong = event.routes[0].legs[0].start_location.lng();
    this.dLat = event.routes[0].legs[0].end_location.lat();
    this.dLng = event.routes[0].legs[0].end_location.lng();

    var MyWayPoints = [];
    var midpoints = event.routes[0].legs[0].steps;
    var totalDist = event.routes[0].legs[0].distance.value;
    var quarter = Math.floor(totalDist * .25)
    var third = Math.floor(totalDist * .75)
    var currentDist = 0;
    var gotPt1 = false;
    var gotPt2 = false;

    for (var i = 0; i < midpoints.length; i++) {
      currentDist = currentDist + midpoints[i].distance.value;
      if (currentDist >= quarter && gotPt1 == false) {
        MyWayPoints.push(midpoints[i].end_point);
        gotPt1 = true;
      }
      if (currentDist >= third && gotPt2 == false) {
        MyWayPoints.push(midpoints[i].end_point);
        gotPt2 = true;
      }
    }

    this.firstMarkerLat = MyWayPoints[0].lat();
    this.firstMarkerLng = MyWayPoints[0].lng();
    this.secondMarkerLat = MyWayPoints[1].lat();
    this.secondMarkerLng = MyWayPoints[1].lng();

    this.getOriginWeather();
    this.getDestWeather();
    this.getMidpointWeather(MyWayPoints[0].lat(), MyWayPoints[0].lng(), MyWayPoints[1].lat(), MyWayPoints[1].lng());
  }

  //get midpoint weather info
  getMidpointWeather(m1Lat, m1Lng, m2Lat, m2Lng) {
    this.weatherService.getWeather(m1Lat, m1Lng).subscribe((weather: any) => {
      this.m1SunCond = weather.weather[0].main;
      this.m1Hi = weather.main.temp_max;
      this.m1Low = weather.main.temp_min;
      this.addWeatherPoint(m1Lat, m1Lng, this.m1SunCond, this.m1Hi, this.m1Low);
    });

    this.weatherService.getWeather(m2Lat, m2Lng).subscribe((weather: any) => {
      this.m2SunCond = weather.weather[0].main;
      this.m2Hi = weather.main.temp_max;
      this.m2Low = weather.main.temp_min;
      this.addWeatherPoint(m1Lat, m1Lng, this.m1SunCond, this.m1Hi, this.m1Low);
    });


  }

  //alert on incorrect input
  public onResponse(event: any) {
    if (event.status != 'OK' && this.origin != "") {
      alert("INPUT ERROR");
    }
  }

  //add to db
  addWeatherPoint(lat, long, sunCond, hi, lo) {
    this.weatherPointService.addWeatherPoint(lat, long, sunCond, hi, lo).subscribe(() => { });
  }


}