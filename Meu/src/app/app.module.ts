import { BrowserModule } from '@angular/platform-browser';/* decora, declara  o componente pra saber que será usado, na classe @NGmmodule*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopoComponent } from './Topo/Topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PrimeiroExemploComponent } from './primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from './segundo-exemplo/segundo-exemplo.component';
import { TerceiroComponentComponent } from './terceiro-component/terceiro-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    NoticiasComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroComponentComponent /* nome do componente que sera utilizado*/
  ],
  imports: [
    BrowserModule,
    FormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
