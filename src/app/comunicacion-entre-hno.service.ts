import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Programador } from './programador';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionEntreHnoService {
  private programadorSelecciodo = new BehaviorSubject<Programador | null>(null)

  setProgramador(p: Programador){
    this.programadorSelecciodo.next(p)
  }
  
  getProgramadorEdit(){
    return this.programadorSelecciodo.asObservable();
  }
 
}
