import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases/listas';
import { ListItem } from '../../app/clases/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
  constructor(private navController:NavController,
              private _listaDeseosService:ListaDeseosService) { }

  listas:Lista[];

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
      if(l.terminada){
        bandera = false;
        break;
      }
    }
    return bandera;
  }
}
