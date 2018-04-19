import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro-component',
  templateUrl: './terceiro-component.component.html',
  styleUrls: ['./terceiro-component.component.css']
})
export class TerceiroComponentComponent implements OnInit {

  idade: number;
  
  constructor() { }

  ngOnInit() {
  }

}
