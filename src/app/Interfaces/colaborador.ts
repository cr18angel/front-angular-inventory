import { Area } from "./Area";
import { Sucursal } from "./Sucursal";
import { Cargo } from "./cargo";
import { CentroCosto } from "./centro-costo";
import { Empresa } from "./empresa";
import { Gerencia } from "./gerencia";
import { Roles } from "./roles";

export interface Colaborador {

codigoUsuario: number;
run: string ;
nombre: string;
correo:string;
clave: string;
// roles: string;
usuarioNTE:string,
fecha_Ingreso: string ;
jefatura_Directa: string ;


// relaciones 
areaId: number ;
area: Area;

cargoId:number ;
cargo: Cargo;

centroCostoId: number;
centroCosto: CentroCosto;

empresaId: number ;
empresa: Empresa;

gerenciaId:number ;
gerencia: Gerencia;

sucursalId: number ;
sucursal: Sucursal;

rolId : number;
rol: Roles;

}
