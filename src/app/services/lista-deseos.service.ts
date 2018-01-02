import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';
import { ListItem } from '../clases/lista-item';

@Injectable()
export class ListaDeseosService {

    listas:Lista[] = [];

  constructor() {
    this.cargarData();
  }

  actualizarData(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarData(){
    this.listas =JSON.parse(localStorage.getItem('data'));
    if(this.listas == null){
      this.listas = [];
    }
  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }
}
