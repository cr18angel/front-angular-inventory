import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignacion } from '../Interfaces/asignacion';
import { ApiResponse } from '../Interfaces/api-response';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  private urlApi = 'https://localhost:7239/';
  private myApiUrl: string = 'api/Asignacion';

  constructor(private _http: HttpClient) { }

  getData(): Observable<Asignacion[]> {

    return this._http.get<ApiResponse<Asignacion[]>>(this.urlApi + this.myApiUrl)
      .pipe(
        map(response => response.resultado)
      );
  } // fin get data


  addData(asignacion: Partial<Asignacion>): Observable<Asignacion> {
    return this._http.post<Asignacion>(`${this.urlApi}${this.myApiUrl}`, asignacion);

  }



  deleteData(id: number): Observable<void> {
    return this._http.delete<void>(`${this.urlApi}${this.myApiUrl}${id}`);


  }

  getDataById(id: number): Observable<Asignacion> {

    return this._http.get<ApiResponse<Asignacion>>(`${this.urlApi}${this.myApiUrl}${id}`)
      .pipe(
        map(response => response.resultado)
      );

  }

  updateData(id: number, asignacion: Asignacion): Observable<void> {
    return this._http.put<void>(`${this.urlApi}${this.myApiUrl}${id}`, asignacion);
  }


}