import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-exemplo',
  templateUrl: './primeiro-exemplo.component.html',
  styleUrls: ['./primeiro-exemplo.component.css']
})
export class PrimeiroExemploComponent implements OnInit {

  name: string = '';
  

  constructor() { }

  ngOnInit() {
  }
public atualizaNome(novoNome: Event){
this.name = (<HTMLInputElement>novoNome.target).value;

}
}
