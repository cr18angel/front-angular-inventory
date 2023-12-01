import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gerencia } from '../Interfaces/gerencia';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class GerenciaService {
  private urlApi = 'https://localhost:7171/'; 
  private myApiUrl: string = 'api/Gerencia/';

  constructor(private _http: HttpClient) { }
  
getData(): Observable<Gerencia[]> {
  return this._http.get<ApiResponse<Gerencia[]>>(`${this.urlApi}${this.myApiUrl}`)
  .pipe(
    map(response => response.resultado)
  )
}

getDataById(id: number): Observable<Gerencia>{
  return this._http.get<ApiResponse<Gerencia>>(`${this.urlApi}${this.myApiUrl}${id}`)
  .pipe(
    map(response => response.resultado)
  )
}






}
