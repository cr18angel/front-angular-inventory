import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../Interfaces/Pais';
import { ApiResponse } from '../Interfaces/api-response';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi = 'https://localhost:7171/'; 
  private myApiUrl: string = 'api/Pais/';
  

  constructor(private http: HttpClient) { }


  getData(): Observable<Pais[]> {

    return this.http.get<ApiResponse<Pais[]>>(this.urlApi + this.myApiUrl)
      .pipe(
        map(response => response.resultado)  // Extrae solo el arreglo de 'resultado'.
      );
  }


  // obtener por id

  getDataById(id: number): Observable<Pais>{
    return this.http.get<ApiResponse<Pais>>(`${this.urlApi}${this.myApiUrl}${id}`)
    .pipe(


      map(response => response.resultado)

    )

  }


  deleteData(id: number): Observable<void>{
    return this.http.delete<void>(`${this.urlApi}${this.myApiUrl}${id}`);

  }

  addData(pais: Partial<Pais>): Observable<Pais> {
    return this.http.post<Pais>(`${this.urlApi}${this.myApiUrl}`, pais);
  }


  updateData(id: number, pais: Pais): Observable<void>{
    return this.http.put<void>(`${this.urlApi}${this.myApiUrl}${id}`,pais);
  }




}
