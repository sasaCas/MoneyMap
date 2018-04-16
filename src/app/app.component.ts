import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Aquí ahora vamos a importar la instancia recién creada
// en el archivo , database.ts ,.
// IMPORTANTE !! Aunque parezca que no importa, en los comentarios
// del curso, Uriel advierte que, aunque a typeScript no le afecte,
// hay otros actores(WebPack) en juego a los que sí les afecta el
// ORDEN de los , import ,.
import db from '../database';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
