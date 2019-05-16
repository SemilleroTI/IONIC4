import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private mail: string;
  private pwd: string;
  private er: any;

  constructor(private router: Router, private log: AngularFireAuth, private toast: ToastController) {
   }

  ngOnInit() {
  }

  async navTabs() {
    try {
      const log = await this.log.auth.signInWithEmailAndPassword(this.mail,this.pwd);
      if(log) {
        this.router.navigateByUrl('/app/tabs/tab1');
        this.mail = null
        this.pwd = null;
      } else {
        console.log('Error');
        this.tos();
      }
          
    } catch(e) {
      console.log('Error');
      this.tos();
    }
  }

  async tos() {
    const tos = await this.toast.create({message: 'Error durante el inicio de sesion!', duration: 3000, position: 'top', color: 'danger'});
    tos.present();
    this.mail = null;
    this.pwd = null;
  }

}
