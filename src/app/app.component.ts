import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Programador } from './programador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  lstProgramadores: Programador[] = [];
  progEdit : Programador = new Programador()


  pushProg(p: Programador) {
    this.lstProgramadores.push(p);
  }
  eliminarProgramador(index: number) {
    this.lstProgramadores.splice(index, 1);
  }
  editar(index: number) {
    //TODO:
    }
}
