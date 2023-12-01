import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../Interfaces/empresa';
import { ApiResponse } from '../Interfaces/api-response';
import { mapToCanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private urlApi = 'https://localhost:7171/'; 
  private myApiUrl: string = 'api/Empresa/';

  constructor(private _http: HttpClient) { }

  getData(): Observable<Empresa[]>{

    return this._http.get<ApiResponse<Empresa[]>>(`${this.urlApi}${this.myApiUrl}`)
    .pipe(
      map(response => response.resultado)
    );
  }

  getDataById(id: number): Observable<Empresa>{
    return this._http.get<ApiResponse<Empresa>>(`${this.urlApi}${this.myApiUrl}${id}`)
    .pipe(
      map(response => response.resultado)
    )
  }


}







