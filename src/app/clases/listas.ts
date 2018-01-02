import { ListItem } from './lista-item';

export class Lista{
  nombre:string;
  terminada:boolean;
  items:ListItem[];

  constructor(nombre:string){
    this.nombre = nombre;
    this.terminada = false;
  }

}
