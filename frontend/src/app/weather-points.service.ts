import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherPointsService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getWeatherPoints() {
    return this.http.get(`${this.uri}/weather`);
  }

  getWeatherPointById(id) {
    return this.http.get(`${this.uri}/weather/${id}`);
  }

  addWeatherPoint(lat, long, sunCond, hi, lo) {
    const weatherPoint = {
      lat: lat,
      long: long,
      sunCond: sunCond,
      hi: hi,
      lo: lo
    };
    return this.http.post(`${this.uri}/weather/add`, weatherPoint);
  }

  deleteWeatherPoint(id){
    return this.http.get(`${this.uri}/weather/delete/${id}`);
  }
}
