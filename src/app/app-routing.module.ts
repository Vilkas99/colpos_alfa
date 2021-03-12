import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCarruselComponent } from './home/home-carrusel/home-carrusel.component';
import { HomeEcommerceComponent } from './home/home-ecommerce/home-ecommerce.component';

const routes: Routes = [
  {
    path:'',
    component: HomeCarruselComponent
  },
  {
    path:'ecommerce',
    component: HomeEcommerceComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
