import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Celular, Modelo } from '../Interfaces/celular';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})

export class CelularService {


  private urlApi = 'https://localhost:7239/';


  private myApiUrl: string = 'api/Celular/';
  private modelo: string = 'api/ModeloCelular/';


  constructor(private _http: HttpClient) { }

  // serivicos 



  getData(): Observable<Celular[]> {
    return this._http.get<ApiResponse<Celular[]>>(this.urlApi + this.myApiUrl)
      .pipe(
        map(response => response.resultado)
      );
  }



  getModeloCelular(): Observable<Modelo[]> {
    return this._http.get<ApiResponse<Modelo[]>>(this.urlApi + this.modelo)
      .pipe(
        map(response => response.resultado)
      )
  }




}
