import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Programador } from './programador';
import { ProgService } from './prog.service';
import { ListComponent } from "./list/list.component";
import { NavegationService } from './navegation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
 
 
  showForm : string = 'list'

  private readonly navegationService = inject(NavegationService)

  ngOnInit(): void {
    this.navegationService.getComponent().subscribe((component) => {
      this.showForm = component
    })
  }

}
