import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherPointsService } from '../weather-points.service'
import { weatherpoint } from '../weatherpoint.model'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  weatherPoint: weatherpoint[];

  @Input() lat:number; long:number; sunCond:String; hi:number; lo:number;
  @Output() outputLocation: EventEmitter<any> = new EventEmitter();

  origin = '';
  dest = '';

  constructor(private weatherPointService: WeatherPointsService) { }

  getLoc(startingLoc, endingLoc, mode) {
    this.origin = startingLoc;
    this.dest = endingLoc;
    var start_end = [startingLoc, endingLoc, mode];
    this.outputLocation.emit(start_end);
  }

  ngOnInit() {
    // this.weatherPointService.getWeatherPoints().subscribe((weatherPoint)=>{
    //   console.log(weatherPoint);
    // });
    // this.fetchWeatherPoint();
  }
  
  fetchWeatherPoint(){
    this.weatherPointService.getWeatherPoints().subscribe((data: weatherpoint[])=>{
      this.weatherPoint = data;
      console.log('Data Requested ...')
      console.log(this.weatherPoint)
    });
  }

  deleteWeatherPoint(id){
    this.weatherPointService.deleteWeatherPoint(id).subscribe(()=>{
      this.fetchWeatherPoint();
    });
  }

}
