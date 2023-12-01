import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retryWhen } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';
import { Colaborador } from '../Interfaces/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private urlApi = 'http://192.168.0.14:1122/'; 
  private myApiUrl: string = 'api/Colaborador/';


  constructor(private _http: HttpClient) { }

getData(): Observable<Colaborador[]>{

return this._http.get<ApiResponse<Colaborador[]>>(this.urlApi + this.myApiUrl)
.pipe(
  map(response => response.resultado)
);
}


getDataById(codigoUsuario: number): Observable<Colaborador>{

return this._http.get<ApiResponse<Colaborador>>(`${this.urlApi}${this.myApiUrl}${codigoUsuario}`)
.pipe(
  map(response => response.resultado)
);

}

updateData(codigoUsuario: number, colaborador: Colaborador): Observable<void>{
  return this._http.put<void>(`${this.urlApi}${this.myApiUrl}${codigoUsuario}`,colaborador);
}




deleteData(id: number): Observable<void>{
  return this._http.delete<void>(`${this.urlApi}${this.myApiUrl}${id}`);

}

addData(colaborador: Partial<Colaborador>): Observable<Colaborador> {
  return this._http.post<Colaborador>(`${this.urlApi}${this.myApiUrl}`, colaborador);
}





}
