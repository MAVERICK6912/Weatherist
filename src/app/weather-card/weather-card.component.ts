import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {WeatherCardModel} from '../Models/Weather-card-model'
import { WeatherService } from "../Services/weather/weather.service";
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
   weatherCardDetails: WeatherCardModel=new WeatherCardModel();
   dateTimeOfCity:String=new String();

  // currTemp: string= getCurrentTemp();
  constructor(public weatherService: WeatherService) { }

  @Output() public loaderEvent=new EventEmitter();

  ngOnInit() {
    //getting time info for every city.    
    this.weatherService.getTimeOfDay('Asia','Kolkata').subscribe(res=>{
      console.log(res);
      this.dateTimeOfCity=res['formatted'];
      console.log(this.dateTimeOfCity);
      // this.dateTimeOfCity="2019-02-17 18:58:00"; //for testing.
      console.log((this.dateTimeOfCity.substring(11,13)));
      if (Number(this.dateTimeOfCity.substring(11,13))>=19 || Number(this.dateTimeOfCity.substring(11,13))<4) {
        this.weatherCardDetails.isNight=true;
        console.log(this.weatherCardDetails.isNight);
      }
      else{
        this.weatherCardDetails.isNight=false;
        console.log(this.weatherCardDetails.isNight);
      }
    },
    error=>{
      console.log(error);
    });

    //Getting weather data for each city.
    this.weatherService.getWeatherCardData('bengaluru,in','metric').subscribe(res=>{
      console.log(res);
      this.weatherCardDetails.cityName=res['name'];
      this.weatherCardDetails.currentTemp=res['main'].temp;
      this.weatherCardDetails.minTemp=res['main'].temp_min;
      this.weatherCardDetails.maxTemp=res['main'].temp_max;
      this.weatherCardDetails.weatherCondition=res['weather'][0].main;
      this.weatherCardDetails.isLoad=false;
      this.loaderEvent.emit(this.weatherCardDetails.isLoad);
    },
    error=>{
      console.log(error);
    });   
  }
}
