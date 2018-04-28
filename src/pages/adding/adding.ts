import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Para dar funcionalidad a esta vista tenemos que hacer uso del
// modelo. Para ello lo primero es importarlo. Nuestro modelo está
// dentro del archivo database, NO confundir con TransactionPage
import { Transaction } from '../../database';

import { GeolocationService } from '../../services/geolocation.service';



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

  // Añadimos aquí la variable de control recién incorporada
  // al html en el campo del toggle
  shouldGeolocate : boolean = false;

  // Vamos a injectar el servicio creado y para eso lo
  // introducimos en el constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocator: GeolocationService) {
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

    // Creamos el método que es llamado por el evento ion-Change
    // cuando se produce el cambio del botón toggle.
    getLocation(){
      if(this.shouldGeolocate){
          // vamos a comprobar imprimiendo la llamada geolocalizadora
          this.geolocator.get().then((resultado)=>{
          // borramos el , log , porque vamos a dar funcionalidad de verdad

          // El objeto model es la instancia de la clase Transaction la cuál es
          // nuestro modelo. Es sencillo, vamos a usar el método recién
          // creado allí para grabar nuestras coordenadas.
          this.model.setCoords(resultado.coords);
          console.log(this.model);
        }).catch((err)=> console.log(err));
      } else{
          // Esto es fácil, aquí, si el usuario no quiere grabar sus
          // coordenadas, pues llamamos al método que las borra.
          this.model.cleanCoords();
          console.log(this.model);
      }

    }

    save(){
      // SIIIIIIÍ. SÓLO CON ESTAS LÍNEAS DE CÓDIGO NUEVAS YA HEMOS
      // ARREGLADO EL ASUNTO DEL ERROR ANTERIOR QUE NOS DECÍA ESO
      // DE , Key already exists ,.

      // el método , save() del modelo devuelve una promesa que se
      // ejecuta cuando termina de grabar el modelo. Ampliamos pues
      // esta parte del código de la siguiente manera.
      this.model.save().then(result => {
        // limpiamos instanciando de nuevo el objeto
        this.model = new Transaction(null, "");
        // Nunca se me hubiera ocurrido instanciar de nuevo el
        // mismo objeto para llamarlo con el mismo nombre de variable
        // Supongo que es una práctica de programación que debo
        // tener en mente. A mi se me hubiera ocurrido algo como:
        // , model.title ="" , por ejemplo pero nunca esta solución
        // que a la vista está que funciona muy bien.

        // Es sencillo regresar a la vista anterior porque estamos
        // dentro del mismo stack. En esta pila sólamente habremos
        // de volver al elemento anterior.
        // Para esto hacemos uso de , navCtrl ,(mirar el
        // constructor, ya estaba así construído) que es una instancia
        // de , NavController , que a su vez está siendo importada,
        // tal y como observamos en este archivo, de ionic-angular.
        // Con la instrucción siguiente vamos a quitar la última vista
        // de la pila y conseguimos que se vuelva a la anterior.
        this.navCtrl.pop(); // funcionaba pero le quito el espacio

    });
  }

}
