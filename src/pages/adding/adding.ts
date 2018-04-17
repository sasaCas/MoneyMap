import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Para dar funcionalidad a esta vista tenemos que hacer uso del
// modelo. Para ello lo primero es importarlo. Nuestro modelo está
// dentro del archivo database, NO confundir con TransactionPage
import { Transaction } from '../../database';


/**
 * Generated class for the AddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {

  // Agregamos una propiedad que vamos a llamar , model ,.
  // Me he visto obligado a inicializar la variable aquí mismo
  // y no dentro del , ionViewDidLoad() , como se ve en el vídeo.
  // Hay más gente igual y esto parece que resuelve el problema.
  model : Transaction = new Transaction(null, "");

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // construímos el objeto recién declarado , model , y para
    // eso voy a pegar aquí lo que nos pide el constructor:
    // constructor(amount:number, title:string, lat?:number, lng?:number,
    //             id?:number, imageUrl?:string)
      // Según el vídeo aquí debería de construir el objeto model
      // pero he tenido que nombrarlo fuera, justo en la clase
      // porque aquí no se construía el objeto. Lo que voy a hacer es
      // asignarle unos valores para probarlo.

  }

  save(){
    this.model.save();
  }

}
