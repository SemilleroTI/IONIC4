import { Component, OnInit } from '@angular/core';
//LLAMANDO LIBRERIAS, MODELOS Y SERVICIOS
import { Device } from '../models/device/device.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavparamService } from '../services/navparam/navparam.service';
import { AngularFireDatabase } from 'angularfire2/database';

//EN ESTA PAGINA PODEMOS VER Y CONTROLAR CADA DISPOSTIVO DE FORMA INDVIDUAL

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
  
  //SLUG ES LA LLAVE CON QUE LLAMAMOS AL DISPOSITIVO DE FORMA INDIVIDUAL
  public slug: string;
  //DEV ES EL OBSERVABLE DEL DISPOSITIVO
  public dev: Observable<Device>;
  //ES EL BOOLEANO QUE CONTROLA EL SWITCHE DE PRENDIO
  public toggle: boolean;
  //ES LA COPIA ESTATICA QUE SACAMOS DE LA PAGINA TAB1
  public obj: Device;
  

  constructor(private router: Router, private db: FirebaseService, private act: ActivatedRoute,
    private nav: NavparamService, private afd: AngularFireDatabase) { 
      //---------------------------------------------------------------------------
      //LAMAMOS LA LLAVE Y EL OBJETO ESTATICO
     this.slug = this.nav.getKey();
     this.obj = this.nav.getData();
 
     //----------------------------------------------------------------------------
     //LLAMOS AL DISPOTIVO INDIVIDUAL DE LA BASE DE DATOS CON LA LLAVE "SLUG"
     this.dev = this.db.byKey(this.slug).snapshotChanges().pipe( map( res => {
       return res.payload.val()
     }));
     
     //-----------------------------------------------------------------------------
     //DEBIDO A QUE NO PODEMOS UTLIZAR OBSERVABLES DE FORMA DIRECTA LLAMAMOS UNA VARIABLE SECUNDARIA
     //QUE CAMBIAR DE VALOR PARA CONTROLAR EL SWITCH, ESTO DETERMINA SI EL SWITCH ESTA PRENDIDO O APGADO 
     //AL ENTRAR A LA PAGINA
     try {
       this.dev.subscribe(res => {
         const x = res.status;
         if(x == 'on') {
           this.toggle = true;
         } else if (x == 'off') {
           this.toggle = false;
         }
       });
     } catch(e) {
       console.log('Error en el dispositivo');
     }
     
   }

   //FUNCION PARA VOLVER LA PAGINA PRINCIPAL
  navTabs() {
    this.router.navigateByUrl('/app/tabs/tab1');
  }

  //FUNCION PARA ELIMINAR DISPOSITIVO PARA ARREGLAR ESTA PARTE BUSQUEN QUE ION-TOAST 
  //E INTENTEN APLICARLO AQUI, BASICAMENTE SIRVE PARA PREGUNTAR ANTES AL USUARIO SI DE VERDAD ESTA SEGURO
  deletThis() {
    this.router.navigateByUrl('/app/tabs/tab1');
    this.db.deleteDev(this.slug);
  }

  //-------------------------------------------------------------------------
  ngOnInit() {}

     
   //-----------------------------------------------
   //FUNCION QUE SE ENCARGA DE PRENDER O APAGAR EL DISPOTIVO, CUANDO EL SWITCH SE PRENDA ACTULIZARA
   //LA BASE DE DATOS EN LAS VARIABLE DE STATUS Y VALUE (STATUS ES ON O OFF Y ES LA QUE VA HASTA EL ARDUINO)
   //Y AL REVER, SI APAGA EL SWITCH ENVIARA UN MENSAJE DE APGADO
  
   change() {
     if(this.toggle == false) {
       this.toggle = true;
       const x = this.obj;
       x.status = 'on';
       x.value = 1;
       this.db.updateDev(this.slug,x);
     } else if(this.toggle == true) {
       this.toggle = false;
       const x = this.obj;
       x.status = 'off';
       x.value = 0;
       this.db.updateDev(this.slug,x);
     }

  }

}
