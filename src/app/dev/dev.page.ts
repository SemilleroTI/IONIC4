import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device/device.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ParaService } from '../services/data/para.service';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
  
  public slug: string;
  public dev: Observable<Device>;
  public nam: Device;

  constructor(private router: Router, private db: FirebaseService, private act: ActivatedRoute) {
    this.slug = this.act.snapshot.paramMap.get('k');
    this.dev = this.db.byKey(this.slug).snapshotChanges().pipe( map( res => {
      return res.payload.val()
    }));
  }

  navTabs() {
    this.router.navigateByUrl('/app/tabs/tab1');
  }

  ngOnInit() {}

}
