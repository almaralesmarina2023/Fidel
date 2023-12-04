import { Component, Input } from '@angular/core';
import { InfoReService } from '../info-re.service';


@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class ReComponent {
  @Input() indice:number=0;
  
  constructor(public service:InfoReService){
     
  }
}
