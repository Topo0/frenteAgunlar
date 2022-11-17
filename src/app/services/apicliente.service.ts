import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Respons } from '../models/respons';

const httpOption = {
  headers: new HttpHeaders
  (
    {
      'Contend-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string='https://apiclub21.azurewebsites.net//api/cliente'

  constructor(
    private _http: HttpClient,
  ) { }

  getCliente():Observable<Respons>{
    return this._http.get<Respons>(this.url);
  };

  //metodo para agregar 
  addCliente( cliente: Cliente ) : Observable<Respons> {
    return this._http.post<Respons>(this.url, cliente, httpOption);
  };

  editCliente( cliente: Cliente ) : Observable<Respons> {
    return this._http.put<Respons>(this.url, cliente, httpOption);
  };

  deleteCliente( id: number ) : Observable<Respons> {
    return this._http.delete<Respons>(`${this.url}/${id}`);
  };
 
}
