import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LineaMovil } from '../Interfaces/linea-movil';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class LineaMovilService {
  private urlApi = 'https://localhost:7239/api';
  private linea: string = '/LineaMovil/'

  constructor(private http: HttpClient) { }



  getData(): Observable<LineaMovil[]> {


    return this.http.get<ApiResponse<LineaMovil[]>>(this.urlApi + this.linea)
      .pipe(
        map(response => response.resultado)
      )
  }







}
