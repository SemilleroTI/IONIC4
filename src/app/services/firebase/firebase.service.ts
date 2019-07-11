import { Injectable } from '@angular/core';
//IMPORATANDO LIBRERIAS Y MODELOS
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Device } from '../../models/device/device.model';

//ESTE SERCVICIO SE UTLIZA PARA NO TENER QUE LLAMAR LA BASE DE DATOS CONSTANTEMENTE
//ESTAMOS CREANDO UNA CLASE QUE PUEDE LLAMAR A LA BASE DE DATOS Y LLEVAR A CABO TAREAS BASICAS DE UN CRUD
//MEDIANTE ESTA CLASE

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //LA DIRECCION DE LA BASE DE DATOS
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
 deleteDev(device: string) {
     return this.listRef$.remove(device);
 }

 //LLAMAR A LA BASE DE DATOS Y TRAER UN SOLO DISPOSITIVO
 byKey(key: string): AngularFireObject<Device> {
   return this.db.object<Device>('lista-dispositivos/'+key);
 }
 
}
