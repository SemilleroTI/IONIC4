import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';

//PAGINA PARA CERRAR SESION

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private log: AngularFireAuth) {}

  //FUNCION PARA VOLVER A  PAGINA DE INICIO DE SESION
  navLog() {
    this.router.navigateByUrl('');
    this.log.auth.signOut();
  }

}
