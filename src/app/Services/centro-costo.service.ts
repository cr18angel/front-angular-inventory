import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentroCosto } from '../Interfaces/centro-costo';
import { ApiResponse } from '../Interfaces/api-response';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroCostoService {
  private urlApi = 'http://192.168.0.14:1122/'; 
  private myApiUrl: string = 'api/CentroCosto/';

  constructor(private _http: HttpClient) { }


  getData(): Observable<CentroCosto[]>{

    return this._http.get<ApiResponse<CentroCosto[]>>(this.urlApi + this.myApiUrl)
    .pipe(
      map(response => response.resultado)
    )
  }

  getDataById(id: number): Observable<CentroCosto>{
    return this._http.get<ApiResponse<CentroCosto>>(`${this.urlApi}${this.myApiUrl}${id}`)
    .pipe(
      map(response => response.resultado)
    )
  } 




}
