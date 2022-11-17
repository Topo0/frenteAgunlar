import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ApiconceptoService {

  url:string='https://apiclub21.azurewebsites.net//api/concepto'

  constructor(
    private _http:HttpClient,
  ){}

  getconcepto(): Observable<Respons>{
     return this._http.get<Respons>(this.url);
  }
}
