import { BrowserModule } from '@angular/platform-browser';/* decora, declara  o componente pra saber que será usado, na classe @NGmmodule*/
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './Topo/Topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    NoticiasComponent,
    AlertaComponent /* nome do componente que sera utilizado*/
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
