import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Programador } from './programador';
import { ProgService } from './prog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  lstProgramadores: Programador[] = [];
  progEdit: Programador = new Programador();

  private progService = inject(ProgService);
  ngOnInit(): void {
    //this.lstProgramadores = this.progService.getProgamadores();

    this.getProgramadores();
  }
  getProgramadores() {
    this.lstProgramadores = this.progService.getProgamadores();
  }

  // pushProg(p: Programador) {
  //   this.lstProgramadores.push(p);
  // }
  eliminarProgramador(index: number) {
    //this.lstProgramadores.splice(index, 1);
    this.progService.delete(index);
    this.getProgramadores();
  }
  editar(index: number) {
    //TODO:
  }
}
