// Para tener un servicio, primero debemos llamar al
// DECORADOR , Injectable ,.
//
// Para eso lo primero es importarlo

import { Injectable } from '@angular/core';

// En la consola ya instalamos el plugin
// ionic cordova plugin add cordova-plugin-geolocation
// y ahora importamos las clases correspondientes
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
// Geolocation nos ofrece una API que nos entrega la
// geolocalización del usuario y está representada
// por un objeto de la clase Geoposition.

// Ahora lo ejecutamos
@Injectable() // IMPORTANTE este decorador no lleva , ; , y a
              // continuación se debe declarar una clase.
// y definimos la clase de nuestro servicio
export class GeolocationService{
  // No es necesario definir el constructor de un servicio
   constructor(private geolocation: Geolocation) {}

  get(){
    // return Promise
    return this.geolocation.getCurrentPosition();
  }
}
