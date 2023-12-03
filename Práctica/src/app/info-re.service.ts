import { Injectable } from '@angular/core';
import { Receta } from './re/recetas';

@Injectable({
  providedIn: 'root'
})
export class InfoReService {
  Recetas:Array<Receta>=[]

  constructor() { 
    this.Recetas[0]=new Receta("Tacos","./assets/tacos.jpeg",[["huevo","10g"], ["pollo","1kg"]],"Son muy buenos");
    this.Recetas[1]=new Receta("Helado","./assets/helados.jpeg",[["huevo","10g"], ["pollo","2kg"]],"Uy que Frio");
    this.Recetas[2]=new Receta("Pizza","./assets/pizza.jpeg",[["huevo","10g"], ["pollo","3kg"]],"Muy buena");
    
    
    
    

  }


}
