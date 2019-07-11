import { Injectable } from '@angular/core';
//IMPORTANDO EL MODELO
import { Device } from '../../models/device/device.model';

//CON ESTE SERVICICO LO QUE INTENTAMOS ES CREAR UNA CLASE QUE NOS PERMITA MOVER DATOS 
//DE UNA PAGINA A OTRA, BASICAMENTE PODEMOS MOVER DISPOSITIVOS DE UNA PAGINA "A" A UNA PAGINA "B"

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  public data: Device;
  public key: string;

  constructor() { }

  //GUARDAMOS EL DISPOTIVO
  setData(d: Device) {
    this.data = d;
  }

  //DEVUELVE EL DISPOITIVO
  getData() {
    return this.data;
  }

  //GUARDAMOS LA LLAVE
  setKey(k: string) {
    this.key = k;
  }

  //DEVUELVE LA LLAVE
  getKey(){
    return this.key;
  }

}
