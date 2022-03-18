import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//Importar componentes creados
import {VideojuegoComponent} from './videojuego/videojuego.component';
import { tenisComponent } from './tenis/tenis.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Pipes
import { CalculadroaPipe } from './pipes/calculara.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    tenisComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadroaPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
