import { Pais } from "./Pais";

export interface Sucursal {

    id: number,
    sucursalNombre: string,
    paisID: number,
    pais: Pais
   
}

