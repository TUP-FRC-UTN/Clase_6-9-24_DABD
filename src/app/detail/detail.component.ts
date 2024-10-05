import { Component, inject, Input } from '@angular/core';
import { Programador } from '../programador';
import { ProgService } from '../prog.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  prog : Programador = new Programador()
   private readonly progService = inject(ProgService)
  
   @Input() set id (id:string){
   this.getById(id);
  }
  
  getById(id:string){
    this.progService.getById(id).subscribe((data)=>{
      this.prog = data
    })
  }
}
