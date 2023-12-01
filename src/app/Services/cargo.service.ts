import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../Interfaces/cargo';
import { ApiResponse } from '../Interfaces/api-response';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {


  private urlApi = 'http://192.168.0.14:1122/'; 
  private myApiUrl: string = 'api/Cargo/';
  
  constructor(private _http: HttpClient) { }



getData(): Observable<Cargo[]>{

return this._http.get<ApiResponse<Cargo[]>>(`${this.urlApi}${this.myApiUrl}`)
.pipe(
  map(response => response.resultado)
);
}

getDataById(id: number): Observable<Cargo>{
return this._http.get<ApiResponse<Cargo>>(`${this.urlApi}${this.urlApi}${id}`)
.pipe(
  map(response => response.resultado)
);
}





//find 
}
