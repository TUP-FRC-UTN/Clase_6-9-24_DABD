import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  private componenteVisible = new Subject<string>()

  setComponente(component : string){
    this.componenteVisible.next(component)
  }

  getComponent() : Observable<string> {
    return this.componenteVisible.asObservable()
  }

 
}
