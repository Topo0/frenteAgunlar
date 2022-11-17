import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/cliente";
import { ApiclienteService } from "src/app/services/apicliente.service";

@Component({
    templateUrl:'dialogClienteCom.html'
})

export class DialogClienteCom {

    public nombre!: string;
    public apellido!:string;

    constructor(
        public dialogRef: MatDialogRef<DialogClienteCom>,
        public apiCliente: ApiclienteService,     
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public edCliente:Cliente
        
    )
    {
        if(this.edCliente !== null){
            this.nombre = edCliente.nombre;
            this.apellido = edCliente.apellido;
        }
    };

    cerrar(){
        this.dialogRef.close();
    };

    addCliente(){
        const nCliente: Cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            idCliente: 0,
        };

        this.apiCliente.addCliente(nCliente).subscribe(respons =>{
            if(respons.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente Agregado', '',{
                    duration: 3000
                })
            }
        });
    };

    editCliente(){

        const nCliente: Cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            idCliente: this.edCliente.idCliente,
        };

        this.apiCliente.editCliente(nCliente).subscribe(respons =>{
            if(respons.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente Modificado', '',{
                    duration: 3000
                })
            }
        });
    };
}
