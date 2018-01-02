import { Component, OnInit } from '@angular/core';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { Lista } from '../../app/clases/listas';
import { ListItem } from '../../app/clases/lista-item';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  listas:Lista[];

  constructor(private _listaDeseosService:ListaDeseosService,
              private navController:NavController) {
  }

  ngOnInit() { }

  irAgregar(){
    this.navController.push(AgregarComponent);
  }

  verDetalle(lista,idx){
    this.navController.push(DetalleComponent, {lista,idx});
  }

  hayListas():boolean{
    let bandera:boolean = true;
    for(let l of this._listaDeseosService.listas){
      if(!l.terminada){
        bandera = false;
        break;
      }
    }
    return bandera;
  }

}
