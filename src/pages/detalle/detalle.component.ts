import { Component, OnInit } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Lista } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

  lista:Lista;
  idx:number;

  constructor(public alertCtrl: AlertController,
              private _listaDeseosService:ListaDeseosService,
              public navController:NavController,
              public navParams:NavParams) { }

  ngOnInit() {
    this.lista = this.navParams.get("lista");
    this.idx = this.navParams.get("idx");
   }

   guardar(){
     this._listaDeseosService.listas[this.idx] = this.lista;
     let bandera:boolean = true;
     for(let item of this._listaDeseosService.listas[this.idx].items){
       if(!item.completado){
         bandera = false;
         break;
       }
     }
     this._listaDeseosService.listas[this.idx].terminada = bandera;
     this._listaDeseosService.actualizarData();
     this.navController.pop();
   }

   confirmar() {
    let confirm = this.alertCtrl.create({
       title: '¿Estas seguro de eliminar esta lista?',
       message: this.lista.nombre+' ya no se podra recuperar!',
       buttons: [
         {
           text: 'Eliminar',
           handler: () => {
             this._listaDeseosService.listas.splice(this.idx,1);
             this._listaDeseosService.actualizarData();
             this.navController.pop();
           }
         },
         {
           text: 'No eliminar',
           handler: () => {}
         }
       ]
   });
   confirm.present();
 }
}
