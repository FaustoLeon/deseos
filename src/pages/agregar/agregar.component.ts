import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import { ListItem,Lista } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {
  titulo:string = "";
  nombreItem:string = "";
  items:ListItem[] = [];

  constructor(public alertCtrl: AlertController,
              public _listaDeseosService:ListaDeseosService,
              public navController:NavController) { }

  ngOnInit() { }

  agregarItem(){
    if(this.nombreItem){
      let item = new ListItem();
      item.nombre = this.nombreItem;
      this.items.push(item);
      this.nombreItem = "";
    }else{
      this.alerta('Algo no esta bien!','El item no puede estar vacio!!!')
    }
  }

  guardar(){
    if(this.titulo.length > 0 && this.items.length > 0){
      let lista = new Lista(this.titulo);
      lista.items = this.items;
      //this._listaDeseosService.listas.push(lista);
      this._listaDeseosService.agregarLista(lista);
      this.navController.pop();
    }else{
      if(this.titulo.length > 0){
        this.alerta('Algo no esta bien!','El nombre de la lista no puede estar vacio');
      }else{
        this.alerta('Algo no esta bien!','Debe de agregar al menos un item');
      }
    }
  }

  borrarItem(i:number){
    this.items.splice(i,1);
  }

  alerta(titulo:string,mensaje:string){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Entendido']
    });
    alert.present();
  }
}
