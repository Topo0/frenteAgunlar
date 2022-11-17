import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule}from '@angular/material/dialog';
import {MatButtonModule}from '@angular/material/button';
import {MatInputModule}from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule } from '@angular/material/grid-list'; 
import { MatMenuModule } from '@angular/material/menu';
import {DialogDeleteComponent} from './comon/delete/dialogDeleteComponent'

import { ClienteComponent } from './cliente/cliente.component';
import { DialogClienteCom } from './cliente/dialog/dialogClienteCom';

import { ProductoComponent } from './producto/producto.component';
import { DialogProductoCom } from './producto/dialog/dialogProductoCom';

import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogDeleteComponent,
    ClienteComponent,
    DialogClienteCom,
    ProductoComponent,
    DialogProductoCom,
    HomeComponent,
    VentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,  
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
