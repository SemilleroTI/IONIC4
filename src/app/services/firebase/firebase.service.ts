import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Device } from '../../models/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private listRef$ = this.db.list<Device>('lista-dispositivos');
  //private object: AngularFireObject<Device>;

  constructor(private db: AngularFireDatabase) { }

  //Recoger toda la informacion de Firebase
  public getAll() {
    return this.listRef$;
 }

 //Añadir nuevo dispositivo
 addDev(device: Device) {
     return this.listRef$.push(device);
 }

 //Actualizar dispostivo
 updateDev(key: string, newDev: Device) {
     return this.listRef$.update(key ,newDev);
 }

 //Eliminar dispostivo
 deleteDev(device: Device) {
     return this.listRef$.remove(device.key);
 }

 byKey(key: string): AngularFireObject<Device> {
   return this.db.object<Device>('lista-dispositivos/'+key);
 }
 
}
