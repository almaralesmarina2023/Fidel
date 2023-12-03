import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ListaReComponent } from './lista-re/lista-re.component';


const routes: Routes = [
  { 
    path: '', component: ListaReComponent
  },
  
  {
    path: "carac", component: CaracteristicasComponent
  }


  ,{
    path: 'carac/:indice', component: CaracteristicasComponent
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
