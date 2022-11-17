import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Concepto } from '../models/concepto';
import { Venta } from '../models/venta';
import { ApiVentaService } from '../services/api-venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  public venta!:Venta;
  public conceptos!:Concepto[];

  public conceptoForm = this.formBuilder.group({
    cantidad:0                                 ,
    idProducto:3
  });

  constructor
  (
    private formBuilder: FormBuilder,
    public apiVenta: ApiVentaService,
  ) {
    this.conceptos = [];
    this.venta = {idCliente:3 , conceptos:[]};
   }

  ngOnInit(): void {
  }

  addConcepto(){
    
  }
}
