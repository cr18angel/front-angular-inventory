import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../Interfaces/Area';
import { ApiResponse } from '../Interfaces/api-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AreaService {

 

  private urlApi = 'http://192.168.0.14:1122/'; 
  private myApiUrl: string = 'api/Area/';

  constructor(private http: HttpClient) { }


getData(): Observable<Area[]>{
  return this.http.get<ApiResponse<Area[]>>(this.urlApi + this.myApiUrl)
  .pipe(
    map(response => response.resultado)  // Extrae solo el arreglo de 'resultado'.
    );
  }


getDataById(id: number): Observable<Area>{
  return this.http.get<ApiResponse<Area>>(`${this.urlApi}${this.myApiUrl}${id}`)
  .pipe (
    map(response => response.resultado)

  )
}






}
