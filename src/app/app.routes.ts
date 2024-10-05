import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
    {
        path:'form', component : FormComponent
    },
    {
        path : 'form/:id', component : FormComponent
    },
    {
        path: 'detail/:id' , component : DetailComponent
    },
    {
        path : 'list' , component : ListComponent
    },
    {
        path : 'reports' , loadComponent : () => import('./reports/reports.component').then(r => r.ReportsComponent)
    },
    {
        path : '', component : ListComponent
    },
    {
        path : '**' , component : NotFoundComponent
    },
   
];
