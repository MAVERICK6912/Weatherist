import { Component, OnInit } from '@angular/core';
import { UiService } from "../Services/ui-service/ui.service";
@Component({
  selector: 'app-add-weather-card',
  templateUrl: './add-weather-card.component.html',
  styleUrls: ['./add-weather-card.component.css']
})

export class AddWeatherCardComponent implements OnInit {

  darkMode:boolean;
  constructor(public UIService: UiService) { }

  ngOnInit() {
    this.UIService.darkModeState.subscribe((val)=>{
      this.darkMode=val;
    })

  }

}
