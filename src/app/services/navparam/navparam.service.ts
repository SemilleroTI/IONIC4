import { Injectable } from '@angular/core';
import { Device } from '../../models/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  public data: Device;
  public key: string;

  constructor() { }

  setData(d: Device) {
    this.data = d;
  }

  getData() {
    return this.data;
  }

  setKey(k: string) {
    this.key = k;
  }

  getKey(){
    return this.key;
  }

}
