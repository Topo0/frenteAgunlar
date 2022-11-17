import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Producto } from "src/app/models/producto";
import { ApiproductoService } from "src/app/services/apiproducto.service";

@Component({
    templateUrl:'dialogProductoCom.html'
})

export class DialogProductoCom {

    public nombre!:string;
    public descripcion!:string;
    public imagen!:string;
    public precio!:any;

    constructor
    (
        public dialogRef: MatDialogRef<DialogProductoCom>,
        public apiproducto:ApiproductoService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public edProducto:Producto
    ) 
    {
        if(edProducto !== null){
            this.nombre =edProducto.nombre;
            this.descripcion = edProducto.descripcion;
            this.imagen = edProducto.imagen;
            this.precio = edProducto.precio;
        }
        
    }; 
    
    cerrar(){
        this.dialogRef.close();
    };

    
    editProducto(){

        const nProduc: Producto = {
            nombre: this.nombre,
            descripcion:this.descripcion,
            imagen:this.imagen,
            precio:this.precio,
            idProducto: this.edProducto.idProducto
        };

        this.apiproducto.edidProducto(nProduc).subscribe(respons =>{
            if(respons.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente Modificado', '',{
                    duration: 3000
                })
            }
        });
    }
}