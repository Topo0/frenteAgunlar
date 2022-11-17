import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogClienteCom} from './dialog/dialogClienteCom';
import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../comon/delete/dialogDeleteComponent';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  
  public lst: any;
  public columnas: string[] = ['idCliente','Nombre','Apellido','Acciones'];

  constructor(
    private apicliente :ApiclienteService,
    public dialog:MatDialog,
    public snakbar:MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getCliente();
  };

  getCliente(){
    this.apicliente.getCliente().subscribe(respuesta => {
      this.lst=respuesta.data;
    })
  };

  
  openAddCli(){
    const dialogRef = this.dialog.open(DialogClienteCom, {
      width : '12000' 
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getCliente();
    })
  };

  openEdit(cliente:Cliente){
    const dialogRef =this.dialog.open(DialogClienteCom, {
      width : '12000',
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getCliente();
    })
  };

  openDelete(cliente:Cliente){
    const dialogRef =this.dialog.open(DialogDeleteComponent, {
      width : '12000',
    
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.apicliente.deleteCliente(cliente.idCliente).subscribe(respons =>{
          if(respons.exito ===1){
            this.snakbar.open("Cliente Eliminado Con Exito","",{
              duration:5000
            });
            this.getCliente();

          }
        })
      }
    })
  };

}
