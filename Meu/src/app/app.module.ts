import { BrowserModule } from '@angular/platform-browser';/* decora, declara  o componente pra saber que será usado, na classe @NGmmodule*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoticiaModule } from './noticia/noticia.module';


import { AppComponent } from './app.component';
import { TopoComponent } from './Topo/Topo.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
     /* nome do componente que sera utilizado*/
  ],
  imports: [
    BrowserModule,
       NoticiaModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
