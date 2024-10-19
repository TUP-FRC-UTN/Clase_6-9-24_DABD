import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class ValidatorFecha{
    static validarFecha(control : FormControl) : ValidationErrors | null{
      const fecha = new Date(control.value)
      const fechaHoy = new Date();

      if(fecha > fechaHoy){
        return {errorFechaInicio : true}
      }
      return null;
    }
}