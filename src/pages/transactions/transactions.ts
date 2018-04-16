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
  templateUrl: 'transactions.html', // esta línea lo une con el html
})
export class TransactionsPage {

  titulo : string = "Movimientos";

  // Necesitamos crear un argumento transactions para
  // poder hacer uso de él más abajo en el Promise
  // que devuelve , loadTransactions ,.
  transactions : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Anteriormente aquí sólo hicimos pruebas de test de base
    // de datos para ver que funcionaba. Esas líneas las hemos
    // borrado ahora.

    // Vamos a llamar a un método nuevo y lo vamos
    // a crear más abajo.
    this.loadTransactions();

  }

    // Y lo creamos aquí
    loadTransactions(){
      // Vamos a llamar al método , all(), recién creado en
      // el otro archivo. Tenemos en cuenta que , all() , devuelve
      // una promesa así que ya la vamos a empezar a tratar como tal
      Transaction.all() // notar que aquí no hay , ; ,.
        .then((resultados) => {

        this.transactions = resultados;
        console.log(this.transactions);
      });
  }

}
