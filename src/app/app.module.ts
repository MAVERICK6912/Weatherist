import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http';

//importing MaterialComponentsModule
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//importing project components & services
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddWeatherCardComponent } from './add-weather-card/add-weather-card.component';
import { WeatherService } from "./Services/weather/weather.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddWeatherCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
