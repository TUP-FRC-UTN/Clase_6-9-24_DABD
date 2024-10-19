import { Contacto } from "./contacto";
import { Proyecto } from "./proyecto";

export class Programador {
    id? : string 
    nombre: string = '';
    apellido: string = ''
    habilidades : string[] = []
    contacto : Contacto = new Contacto();
    proyectos : Proyecto[]= []
}
