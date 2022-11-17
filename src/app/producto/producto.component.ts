import { Component, OnInit } from '@angular/core';
import { ApiproductoService } from '../services/apiproducto.service';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from '../models/producto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogProductoCom } from './dialog/dialogProductoCom';
import { DialogDeleteComponent } from '../comon/delete/dialogDeleteComponent';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public cart : any;
  public conten: string[] = ["idProducto","Nombre","Descripcion","Imagen","Precio","Acciones"]

  public nombre!:string;
  public descripcion!:string;
  public imagen!:string;
  public precio!:any;


  constructor
  (
    private apiProducto :ApiproductoService,
    public dialog:MatDialog,
    public snackBar:MatSnackBar, 
  ) { };

  ngOnInit(): void {
    this.getProducto();
  } 

  
  getProducto(){
    this.apiProducto.getProducto().subscribe(respuesta => {
      this.cart=respuesta.data;
    })
  };


  addProducto(){
    const nProduc: Producto = {
        nombre: this.nombre,
        descripcion:this.descripcion,
        imagen:this.imagen,
        precio:this.precio,
        idProducto: 0,  
    };

    this.apiProducto.addProducto(nProduc).subscribe(respons =>{
        if(respons.exito === 1){
          this.snackBar.open('Producto Agregado', '',{
                duration: 3000
           })
        }
    })
 };

 openEdit(producto:Producto){
  const dialogRef =this.dialog.open(DialogProductoCom, {
    width : '12000',
    data: producto
  });
  dialogRef.afterClosed().subscribe(result =>{
    this.getProducto();
  })
};

openDelete(producto:Producto){
  const dialogRef =this.dialog.open(DialogDeleteComponent, {
    width : '12000',
  
  });
  dialogRef.afterClosed().subscribe(result =>{
    if(result){
      this.apiProducto.deleteProducto(producto.idProducto).subscribe(respons =>{
        if(respons.exito ===1){
          this.snackBar.open("Producto Eliminado Con Exito","",{
            duration:5000
          });
          this.getProducto();

        }
      })
    }
  })
};


}
