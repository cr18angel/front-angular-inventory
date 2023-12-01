import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computador, Marca, Modelo, Pais, SistemaOperativo, Tipo, UbicacionActivo } from '../Interfaces/computador';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {
  private urlApi = 'https://localhost:7239/';
  private computador: string = 'api/Computador/';
  private marca: string = 'api/MarcaComputadora/';
  private modelo: string = 'api/ModeloComputadora/';
  private sistemaOp: string = 'api/SistemaOperativoComputador/';
  private tipoActivo: string = 'api/TipoActivoComputadora/';
  private pais: string = 'api/Pais/'
  private ubicacionActivo: string = 'api/UbicacionActivo/';


  constructor(private _http: HttpClient) { }


  getData(): Observable<Computador[]> {

    return this._http.get<ApiResponse<Computador[]>>(this.urlApi + this.computador)
      .pipe(
        map(response => response.resultado)
      );
  } // fin get data


  sendData(computador: Partial<Computador>): Observable<Computador> {
    return this._http.post<Computador>(`${this.urlApi}${this.computador}`, computador);
  }



  // ------------------------ Entindades hijas -----------------------------

  //Marca
  getMarca(): Observable<Marca[]> {
    return this._http.get<ApiResponse<Marca[]>>(`${this.urlApi}${this.marca}`)
      .pipe(
        map(response => response.resultado)
      );
  }

  getModelo(): Observable<Modelo[]> {
    return this._http.get<ApiResponse<Modelo[]>>(`${this.urlApi}${this.modelo}`)
      .pipe(
        map(response => response.resultado)
      );
  }

  getSistemaOp(): Observable<SistemaOperativo[]> {
    return this._http.get<ApiResponse<SistemaOperativo[]>>(`${this.urlApi}${this.sistemaOp}`)
      .pipe(
        map(response => response.resultado)
      );

  }

  getTipo(): Observable<Tipo[]> {
    return this._http.get<ApiResponse<Tipo[]>>(`${this.urlApi}${this.tipoActivo}`)
      .pipe(
        map(response => response.resultado)
      );
  }

  getPais(): Observable<Pais[]> {
    return this._http.get<ApiResponse<Pais[]>>(`${this.urlApi}${this.pais}`)
      .pipe(
        map(response => response.resultado)
      );
  }

  getUbicacionActivo(): Observable<UbicacionActivo[]> {
    return this._http.get<ApiResponse<UbicacionActivo[]>>(`${this.urlApi}${this.ubicacionActivo}`)
      .pipe(
        map(response => response.resultado)
      );
  }









}
