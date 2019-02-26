import { Component } from '@angular/core';

import {MatToolbar} from  '@angular/material'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  title = 'Weatherist';
  isDataAvailable: boolean = true;
}
