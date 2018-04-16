import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importamos el MODELO
import { Transaction } from '../../database';
// Todas las acciones que queramos llevar a cabo
// con la base de datos se deben hacer a través
// del uso de este modelo
// Es una buena práctica y evita errores. Así que es
// obligatorio para ser productivo

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  titulo : string = "Movimientos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // borramos el log que había aquí
    // Y VAMOS A GENERAR UNA TRANSACCIÓN.
    // Para ello creamos un nuevo objeto de la
    // clase , Transaction, y para ello pego aquí el constructor:
    // constructor(amount:number, title:string, lat?:number, lng?:numer,
    //             id?:number, imageUrl?:string)
    let transaction = new Transaction(20, "Primera transacción");
    // Seguidamente cogemos el objeto recién creado y se lo pasamos
    // por fin a indexDB.
    transaction.save();

  }

}
