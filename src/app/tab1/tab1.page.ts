import { Component, OnInit } from '@angular/core';
//LLAMANDO LIBRERIAS, SERVICIOS Y MODELOS
import { AngularFireList } from 'angularfire2/database'
import { Device } from '../models/device/device.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';
import { map } from 'rxjs/operators';
import { NavparamService } from '../services/navparam/navparam.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //OBSERVABLES, VARIABLES EN DONDE SE GUARDARN LOS DATOS
  private refDev$: AngularFireList<Device>;
  private Dev$: Observable<Device[]>;
  
  constructor(private router: Router, private db: FirebaseService, private nav: NavparamService, private ctrl: NavController) {
    //LLAMANDO LA BASE DE DATOS ESTO DEVUELVE UN OBSERVABLE EL CUAL UTILIZAMOS PARA MOSTRAR LOS DATOS EN HTML
    this.refDev$ = this.db.getAll();
    this.Dev$ = this.refDev$.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));

  }

  //FUNCION PARA IR A LA PAGINA DE CREAR
  navCreate() {
    this.router.navigateByUrl('/create');
  }

  //FUNCION PARA IR A LA PAGINA DE DISPOTIVIO
  //AL SELECCIONAR UN DISPOSITIVO ESTAMOS SELECCIONANDO LA LLAVE DE DICHO DISPOSITIVO
  //Y DESPUES NOS VAMOS A LA PAGINA DE DISPOTIVOS CON ESA LLAVE Y UNA COPIA DEL OBJETO ESTATICO
  onItem(d: Device) {
    this.nav.setData(d);
    this.nav.setKey(d.key);
    this.ctrl.navigateForward('/dev');
  }

  ngOnInit() {}
  
  

}

