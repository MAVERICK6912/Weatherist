import { Component, OnInit } from '@angular/core';
import { UiService } from "../Services/ui-service/ui.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public UIService:UiService) { }

  public isLoad:boolean = true;
  public darkModeActive:boolean;
  ngOnInit() {
    this.UIService.darkModeState.subscribe((val)=>{
      this.darkModeActive=val;
    })
  }

  modeToggleSwitch(){
    this.UIService.darkModeState.next(!this.darkModeActive);
  }

}
