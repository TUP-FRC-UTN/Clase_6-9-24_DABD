import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Programador } from '../programador';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ProgService } from '../prog.service';
import { NavegationService } from '../navegation.service';
import { ComunicacionEntreHnoService } from '../comunicacion-entre-hno.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  //providers:[ProgService]
})
export class FormComponent implements OnInit, OnChanges,OnDestroy {
  

  prog: Programador = new Programador();
  isEdit: boolean = false;
  private subscription =  new Subscription()

  //constructor(private progService : ProgService) {}
  private readonly progService = inject(ProgService);
 // private readonly navegationService = inject(NavegationService)
  //private readonly cecService = inject(ComunicacionEntreHnoService)
  private readonly router = inject(Router)
  private readonly activatedRouter = inject(ActivatedRoute)
  listHabilidades: string[] = ['.Net', 'Java', 'Javascript', 'AWS'];

  habilidadSeleccionada: string = '';
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data) => {
      this.getById(data['id'])
    })
  }
  getById(id: string) {
    this.progService.getById(id).subscribe((data) => {
      this.prog = data;
      this.isEdit = true
    });
  }
  sendForm(form: NgForm) {
    //TODO:
    if (form.valid) {
      // this.enviadoEmit.emit(this.prog);
      // this.progService.addPush(this.prog);
      if (this.isEdit) {
        this.subscription.add(
        this.progService.put(this.prog).subscribe({
          next: (data) => alert("programador creado" + data.id),
          error: (errr) => alert("Error al crear el programdor."),
          complete: () => this.router.navigate(['list'])
        }))
      } else {
        this.subscription.add(
        this.progService.post(this.prog).subscribe({
          next: (data) => alert("programador creado" + data.id),
          error: (errr) => alert("Error al crear el programdor."),
         complete: () => this.router.navigate(['list'])
        }))
      }

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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log("destruido")

  }

}
