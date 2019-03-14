import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database'
import { Device } from '../models/device/device.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private refDev$: AngularFireList<Device>;
  private Dev$: Observable<Device[]>;
  
  constructor(private router: Router, private db: FirebaseService) {
    this.refDev$ = this.db.getAll();
    this.Dev$ = this.refDev$.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  navCreate() {
    this.router.navigateByUrl('/create');
  }

  onItem(k: string) {
    this.router.navigate(['/dev',{k}]);
  }

  ngOnInit() {}
  
  

}

