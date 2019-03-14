import { Injectable } from '@angular/core';
import { Device } from 'src/app/models/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class ParaService {

  private item: Device;

  setitem(d: Device) {
    this.item = d;
  }

  getitem() {
    return this.item;
  }

}
