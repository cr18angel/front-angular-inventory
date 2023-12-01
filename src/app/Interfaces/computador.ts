export interface Computador {
  id: number;
  serie: string;
  caracteristica: string;
  nroFactura: number;
  nroGuia: number;
  precio: number;
  fechaCompra: string;
  modeloId: number;
  modelo: Modelo;
  soId: number;
  so: SistemaOperativo;
  tipoId: number;
  tipo: Tipo;
  paisId: number;
  pais: Pais;
  ubicacionActivoId: number;
  ubicacionActivo: UbicacionActivo;
}





export interface Modelo {
  id: number;
  nombreModelo: string;
  marcaId: number;
  marca: Marca;
}

export interface Marca {
  id: number;
  nombreMarca: string;
}

export interface SistemaOperativo {
  id: number;
  nombreSO: string;
}

export interface Tipo {
  id: number;
  nombreTipoActivo: string;
}

export interface Pais {
  id: number;
  nombrePais: string;
}

export interface UbicacionActivo {
  id: number;
  ubicacion: string;
  descripcion: string;
}