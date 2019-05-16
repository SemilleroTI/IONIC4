import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device/device.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavparamService } from '../services/navparam/navparam.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
  
  public slug: string;
  public dev: Observable<Device>;
  public toggle: boolean;
  public obj: Device;
  public test: any;

  constructor(private router: Router, private db: FirebaseService, private act: ActivatedRoute,
    private nav: NavparamService, private afd: AngularFireDatabase) { 
      //---------------------------------------------------------------------------
     this.slug = this.nav.getKey();
     this.obj = this.nav.getData();
 
     //----------------------------------------------------------------------------
     this.dev = this.db.byKey(this.slug).snapshotChanges().pipe( map( res => {
       return res.payload.val()
     }));
     
     //-----------------------------------------------------------------------------
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

  navTabs() {
    this.router.navigateByUrl('/app/tabs/tab1');
  }

  deletThis() {
    this.router.navigateByUrl('/app/tabs/tab1');
    this.db.deleteDev(this.slug);
  }

  //-------------------------------------------------------------------------
  ngOnInit() {}

     
   //-----------------------------------------------
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
