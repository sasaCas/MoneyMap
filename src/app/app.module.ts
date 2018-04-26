import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Añadimos aquí la nueva página además de en el
// NgModule .declarations y en .entryComponents
import { TransactionsPage } from '../pages/transactions/transactions';

// Debemos declarar la página nueva en este archivo
// en todos los sitios correspondientes
import { AddingPage } from '../pages/adding/adding';

// Acabamos de crear esa clase nueva y para usarla la importamos
// aquí y también la declaramos en los providers.
import { GeolocationService } from '../services/geolocation.service';
// He tenido que importar esto para declararlo en , provider ,.
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionsPage,
    AddingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransactionsPage,
    AddingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeolocationService,
    Geolocation // si no se pone este provider te salta
                // un error advirtiendo que lo hagas.
  ]
})
export class AppModule {}
