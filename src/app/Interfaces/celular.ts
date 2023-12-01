export interface Celular {
  id: number;
  imei: string;
  numeroFactura: number;
  numeroGuia: number;
  valorNeto: number;
  fechaCompra: string;
  observacion: string;
  modeloId: number;
  modelo: Modelo;
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

export interface Pais {
  id: number;
  nombrePais: string;
}

export interface UbicacionActivo {
  id: number;
  ubicacion: string;
  descripcion: string;
}