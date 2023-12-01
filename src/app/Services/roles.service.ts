import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../Interfaces/roles';
import { ApiResponse } from '../Interfaces/api-response';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  

private urlApi = 'https://localhost:7171/'; 
private myApiUrl: string = 'api/Rol/';
constructor(private _http: HttpClient) { }

getData(): Observable<Roles[]> {

  return this._http.get<ApiResponse<Roles[]>>(this.urlApi + this.myApiUrl)
    .pipe(
      map(response => response.resultado)  // Extrae solo el arreglo de 'resultado'.
    );
}





}