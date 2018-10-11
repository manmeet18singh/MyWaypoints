import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  uri = 'https://api.openweathermap.org/data/2.5/weather?';
  weatherKey = '&appid=3b66b9c3ab9dee8bbd0d2bc5ae8b5c64';
  degreeMode = '&units=imperial';


  constructor(private http: HttpClient) { }

  getOriginWeather(origin){
    return this.http.get(`${this.uri}q=${origin}${this.degreeMode}${this.weatherKey}`)
  }

  getDestWeather(dest){
    return this.http.get(`${this.uri}q=${dest}${this.degreeMode}${this.weatherKey}`)
  }
  getWeather(lat, long){
    return this.http.get(`${this.uri}lat=${lat}&lon=${long}${this.degreeMode}${this.weatherKey}`)
}
}