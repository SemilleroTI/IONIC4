import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTANDO LIBRERIAS DE @ANGULAR/FIRE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { config } from '../environments/config';
import { FirebaseService } from './services/firebase/firebase.service';
import { AngularFireAuthModule } from 'angularfire2/auth'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  //IMPLEMENTADO LAS LIBRERIAS, DE ESTA FORMA PODEMOS LLAMARLAS EN CUALQUIER PAGINA
  AngularFireModule.initializeApp(config), AngularFireDatabaseModule, AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

//NO HACE FALTA TOCAR MUCHO EN ESTA PAGINA, PERO SI SE INSTALAN NUEVAS LIBRERIAS HAY QUE IMPORTALAS AQUI
