import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';

// import { WeatherCardModel } from "../../Models/Weather-card-model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly weatherApiKey:string='bacd316b8ea2d4385a8edfa8281ca467';
  private readonly timeApiKey:string='YW1EDNEXZC4S';
  private readonly timeAPIURL:string="http://api.timezonedb.com/v2.1/get-time-zone?key=";
  httpHeaderForTimeApi:HttpHeaders= new HttpHeaders().append('Access-Control-Allow-Origin','*');

  constructor(public http:HttpClient) { }

  getWeatherCardData(city:string, metric:'metric'|'imperial'='metric'): Subject<object>{
    const weatherCardData=new Subject<object>();
    // weatherCardData.next(this.http.get(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${this.apiKey}`
    // ));
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${this.weatherApiKey}`
    ).subscribe((data)=>{            
      weatherCardData.next(data);
    });
    return weatherCardData;
  }
  getCityWeatherByName(city:string, metric:'metric'|'imperial'='metric'): Subject<string>{
    const dataSub=new Subject<string>();
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${this.weatherApiKey}`).
    subscribe((data)=>{dataSub.next(data['weather']);},
    (err)=>{
      console.log(err);
    });
    return dataSub;
  }
  
  getCitiesWeatherByName(cities:Array<string>, metric:'metric'|'imperial'='metric'):Subject<any>{
    const citiesSubject=new Subject();
    cities.forEach((city)=>{
      citiesSubject.next(this.http.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${this.weatherApiKey}`
      ));
    });
    return citiesSubject;
  }

  getWeatherCondition(city:string):Subject<string>{
    const dataSub=new Subject<string>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.weatherApiKey}`
    ).subscribe((data)=>{
      dataSub.next(data['weather'][0].main);
    });
    return dataSub;
  }

  getCurrentTemp(city:string, metric:'metric'|'imperial'='metric'):Subject<number>{
    const dataSub=new Subject<number>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${this.weatherApiKey}`
    ).subscribe((data)=>{
      dataSub.next(Math.round(Number(data['main'].temp)));
    });
    return dataSub;
  }
  getTimeOfDay(region:string,city: string):Subject<object>{
    const time=new Subject<object>();
    this.http.get(
      `${this.timeAPIURL}`+`${this.timeApiKey}&format=json&by=zone&zone=${region}/`+`${city}`
      ).subscribe((data)=>{
      time.next(data);
    },(error)=>{
      console.error(error);      
    }
    );
    return time;
  }
  // getMinTemp(city:string, metric:'metric'|'imperial'='metric'):Subject<number>{
  //   const dataSub=new Subject<number>();
  //   let min:number;
  //   this.http.get(

  //   )
  // }
}
