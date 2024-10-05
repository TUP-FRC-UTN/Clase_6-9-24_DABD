import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programador } from './programador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgService {

  private readonly http = inject(HttpClient)

  //constructor(private htpp:HttpClient){}

  private apiUrl = "http://localhost:3000/programadores/"

  get(): Observable<Programador[]> {
    return this.http.get<Programador[]>(this.apiUrl)
  }
  getById(id: string) : Observable<Programador> {
    const url = this.apiUrl + id // http://localhost:3000/programadores/aa42
    return this.http.get<Programador>(url)
  }

  post(p: Programador): Observable<Programador> {
    return this.http.post<Programador>(this.apiUrl, p)
  }

  put(prog: Programador): Observable<Programador> {
    const url = this.apiUrl + prog.id
    return this.http.put<Programador>(url, prog)
  }

  delete(id: string): Observable<Programador> {
    const url = this.apiUrl + id
    return this.http.delete<Programador>(url);
  }


}
