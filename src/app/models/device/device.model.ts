export interface Device {
    key?: string,
    name: string,
    desc: string,
    status: string,
    value?: number,
    value2?: number
}

//MODELO DE LOS DISPOSITIVOS, ESTE MODELOS SE UTILIZA CREAR UNA ESTANDAR EN COMO VAMOS A UTLIZAR LOS DATOS DE LA BASE DE DATOS
//DE ESTA FORMA NO HAY NINGUN DATO SUELTO, SOLO ESTA COPIAS DE LOS DISPOSITIVOS