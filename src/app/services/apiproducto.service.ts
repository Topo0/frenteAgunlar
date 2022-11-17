import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
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
export class ApiproductoService {
  url:string='https://apiclub21.azurewebsites.net//api/producto'
  constructor(
    private _http:HttpClient,
  ) { }

  getProducto():Observable<Respons>{
    return this._http.get<Respons>(this.url);
  }

  addProducto(producto:Producto) : Observable<Respons> {
    return this._http.post<Respons>(this.url, producto, httpOption);
  };

  edidProducto( producto:Producto ) : Observable<Respons> {
    return this._http.put<Respons>(this.url, producto, httpOption);
  };

  deleteProducto( id: number ) : Observable<Respons> {
    return this._http.delete<Respons>(`${this.url}/${id}`);
  };
 
}
