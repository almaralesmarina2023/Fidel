import { Component } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { InfoReService } from '../info-re.service';
@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {
  
  indice?: number;
  


  constructor(private route: ActivatedRoute,public service:InfoReService){
    
    this.route.params.subscribe(params=>{
      this.indice = parseInt(params['indice']);
    });
  }
  
  
    
  

}
