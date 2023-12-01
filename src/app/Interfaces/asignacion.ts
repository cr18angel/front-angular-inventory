import { Celular } from "./celular";
import { Computador } from "./computador";
import { LineaMovil } from "./linea-movil";

export interface Asignacion {

  id: number;
  fechaAsignacion: Date;
  codigoUsuario: number;
  nombreUsuario: string;
  ComputadorId: number;
  computadora: Computador;
  idCelular: number;
  CelularId: Celular;
  lineaMovilId: number;
  lineaMovil: LineaMovil;
  observacion: string;
}
