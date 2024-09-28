import { Component, inject, OnInit } from '@angular/core';
import { ProgService } from '../prog.service';
import { Programador } from '../programador';
import { ComunicacionEntreHnoService } from '../comunicacion-entre-hno.service';
import { NavegationService } from '../navegation.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  lstProgramadores: Programador[] = [];
  progEdit: Programador = new Programador();

  private readonly progService = inject(ProgService);
  private readonly cecService = inject(ComunicacionEntreHnoService)
  private readonly navegationService = inject(NavegationService)
  ngOnInit(): void {
   
    this.getProgramadores();
  }
  getProgramadores() {
    // this.progService.get().subscribe({
    //   next: (data : Programador[]) => this.lstProgramadores = data,
    //   error : (err) => console.log(err),
    //   complete : () => console.log("complete")
    // })
   
    this.progService.get().subscribe( (data : Programador [] ) => {
    this.lstProgramadores = data
    });

  }

 
  eliminarProgramador(id?: string) {
    if(id == null) return;
    this.progService.delete(id).subscribe((data)=> {
      alert("Programador eliminado: " + data.nombre)
      this.getProgramadores();
    })
   
  }
  editar(p: Programador) {
    this.cecService.setProgramador(p);
    this.navegationService.setComponente('form')
  }
}
