import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ListaReComponent } from './lista-re/lista-re.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { 
    path: '', component: ListaReComponent
  },
  
  {
    path: "carac", component: CaracteristicasComponent
  }


  ,{
    path: 'carac/:indice', component: CaracteristicasComponent
  },
  {
    path:'q', component: QuienesSomosComponent
  },
  {
    path:'c',component:ContactosComponent
  }

  

  
  
 
    
  

] 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
