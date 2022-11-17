import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respons } from '../models/respons';
import { Venta } from '../models/venta';

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
export class ApiVentaService {

  url: string ='https://apiclub21.azurewebsites.net//api/venta'


  constructor
  (
    private _http: HttpClient,
  ) { }

  getVenta(){

  };

  addVenta(venta:Venta):Observable<Respons>{
    return this._http.post<Respons>(this.url, venta, httpOption)
  };

}
