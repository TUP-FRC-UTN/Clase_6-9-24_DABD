import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Programador } from '../programador';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ProgService } from '../prog.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  //providers:[ProgService]
})
export class FormComponent implements OnChanges {
  @Input() progEdit = new Programador();

  prog: Programador = new Programador();

  //constructor(private progService : ProgService) {}
  private progService = inject(ProgService);

  listHabilidades: string[] = ['.Net', 'Java', 'Javascript', 'AWS'];

  habilidadSeleccionada: string = '';

  //@Output() enviadoEmit = new EventEmitter<Programador>();
  sendForm(form: NgForm) {
    //TODO:
    if (form.valid) {
      // this.enviadoEmit.emit(this.prog);
     this.progService.addPush(this.prog);
      this.prog = new Programador();
      this.habilidadSeleccionada = '';
      console.log(this.prog);
    }
  }
  agregarHabilidades() {
    if (!this.prog.habilidades.includes(this.habilidadSeleccionada))
      this.prog.habilidades.push(this.habilidadSeleccionada);
  }
  eliminarHabilidades(index: number) {
    this.prog.habilidades.splice(index, 1);
  }
  ngOnChanges(): void {
    //TODO: completar con lo visto en clase
  }
}
