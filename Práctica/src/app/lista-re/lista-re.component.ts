import { Component } from '@angular/core';
import { InfoReService } from '../info-re.service';
import { Receta } from '../re/recetas';


@Component({
  selector: 'app-lista-re',
  templateUrl: './lista-re.component.html',
  styleUrls: ['./lista-re.component.css']
})
export class ListaReComponent {


  constructor(public info:InfoReService ){
 
  }
  
  

}
