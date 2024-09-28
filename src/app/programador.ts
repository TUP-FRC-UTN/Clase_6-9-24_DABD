import { Contacto } from "./contacto";

export class Programador {
    id? : string 
    nombre: string = '';
    apellido: string = ''
    habilidades : string[] = []
    contacto : Contacto = new Contacto();

}
