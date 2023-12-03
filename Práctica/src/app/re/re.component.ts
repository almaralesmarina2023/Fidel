import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class ReComponent {
  @Input() nombre:string = "";
  @Input() img:string = "";
  @Input() indice:number=0;
  

}
