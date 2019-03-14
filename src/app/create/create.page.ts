import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../models/device/device.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  newDev: Device = {
    name: '',
    desc: '',
    status: 'off',
    value: 0
  };

  constructor(private router: Router, private Fire: FirebaseService) { }

  ngOnInit() {
  }

  navTab() {
    this.router.navigateByUrl('app/tabs/tab1');
    this.newDev.name = '';
    this.newDev.desc = '';
  }

  crtDev() {
    this.Fire.addDev(this.newDev);
    this.router.navigateByUrl('app/tabs/tab1');
    this.newDev.name = '';
    this.newDev.desc = '';
    console.log('Creado');
  }

}
