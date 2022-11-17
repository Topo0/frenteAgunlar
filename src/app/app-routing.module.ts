import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = 
[
  {path:'', redirectTo: '/home', pathMatch:'full' },
  {path:"home", component: HomeComponent },
  {path:"cliente", component: ClienteComponent},
  {path:"producto", component: ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
