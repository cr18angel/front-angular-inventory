
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal } from '../Interfaces/Sucursal';

import { Observable, map } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})


export class SucursalService {

// variables de conexion 
private urlApi = 'http://192.168.0.14:1122/'; 
private myApiUrl: string = 'api/Sucursal/';

  constructor(private http: HttpClient) { }

getData(): Observable<Sucursal[]>{
  return this.http.get<ApiResponse<Sucursal[]>>(this.urlApi+ this.myApiUrl)
  .pipe(
    map(response => response.resultado)
  )
}

getDataById(id: number): Observable<Sucursal>{
  return this.http.get<ApiResponse<Sucursal>>(`${this.urlApi}${this.myApiUrl}${id}`)
  .pipe(
    map(response => response.resultado)
  )
}




addData(sucursal: Partial<Sucursal>): Observable<Sucursal>{
  return this.http.post<Sucursal>(`${this.urlApi}${this.myApiUrl}`, sucursal);
}


deleteData(id: number): Observable<void>{
  return this.http.delete<void>(`${this.urlApi}${this.myApiUrl}${id}`);

}



//fin de la clase 
}
