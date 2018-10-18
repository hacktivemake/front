import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var $:any
declare var M:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.updateTextFields();
  }

}
