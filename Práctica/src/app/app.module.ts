import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfoReService } from './info-re.service';
import { AppComponent } from './app.component';
import { ListaReComponent } from './lista-re/lista-re.component';
import { ReComponent } from './re/re.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReComponent,
    ReComponent,
    CaracteristicasComponent,
    QuienesSomosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InfoReService],
  bootstrap: [AppComponent]
})
export class AppModule { }
