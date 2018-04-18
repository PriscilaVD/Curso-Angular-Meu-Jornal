import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: string []=[

  "Noticia 1",
  "Noticia 2",
  "Noticia 3",
  "Noticia 4"];/* criação da variavel tipo string, criação de  tamanho 4*/
    
  mostrarNoticia: boolean = true;
  /*quando entra no site, todas as noticas erao mostrdas, quando clica rno botao, vai aparecer uma noticia apenas*/
  
  
  constructor() { }

  ngOnInit() {
  }
/*criação de método, esconder noticia*/
public esconderNoticia (){
  this.mostrarNoticia = false;
  
}
public Voltar() {
  this.mostrarNoticia = true;
}
}
