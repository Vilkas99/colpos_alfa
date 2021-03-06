import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home/home.component';

import { HomeCarruselComponent } from './home/home-carrusel/home-carrusel.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeEcommerceComponent } from './home/home-ecommerce/home-ecommerce.component';
import { HomeEventosComponent } from './home/home-eventos/home-eventos.component';
import { HomeNoticiasComponent } from './home/home-noticias/home-noticias.component';
import { HomeGaleriaComponent } from './home/home-galeria/home-galeria.component';
import { CursosHomeComponent } from './cursos/cursos-home/cursos-home.component';

import { ForoHomeComponent } from './foros/foro-home/foro-home.component';
import { ForoCategoriasComponent } from './foros/foro-categorias/foro-categorias.component';
import { ForoPostsComponent } from './foros/foro-posts/foro-posts.component';
import { ForoPostNuevoComponent } from './foros/foro-post-nuevo/foro-post-nuevo.component';


import { SecurityLoginComponent } from './security/security-login/security-login.component';
import { SecurityNuevoComponent } from './security/security-nuevo/security-nuevo.component';
import { SecurityOlvidePassComponent } from './security/security-olvide-pass/security-olvide-pass.component';
import { SecurityRecuperarPassComponent } from './security/security-recuperar-pass/security-recuperar-pass.component';


import { CursosAulaComponent } from './cursos/cursos-aula/cursos-aula.component';

import { EcommerceCategoriasComponent } from './ecommerce/ecommerce-categorias/ecommerce-categorias.component';
import { EcommerceProductosComponent } from './ecommerce/ecommerce-productos/ecommerce-productos.component';
import { EcommerceDetalleProductoComponent } from './ecommerce/ecommerce-detalle-producto/ecommerce-detalle-producto.component';

const routes: Routes = [
  {
    path:'',
    component: HomeGaleriaComponent

  },
 
  {
    path:'carrusel',
    component: HomeCarruselComponent
  },
  {
    path:'about',
    component: HomeAboutComponent
  },
  {
    path:'galeria',
    component: HomeGaleriaComponent
  },
  {
    path:'eventos',
    component: HomeEventosComponent
  },
  {
    path:'noticias',
    component:   HomeNoticiasComponent
  },
  {
    path:'ecommerce',
    component:   HomeEcommerceComponent
  },
  {
    path:'cursos',
    component:   CursosHomeComponent
  },
  {
    path:'cursos/aula',
    component:   CursosAulaComponent
  },
  {
    path:'ecommerce/categorias',
    component:   EcommerceCategoriasComponent
  },
  {
    path:'ecommerce/productos',
    component:   EcommerceProductosComponent
  },
  {
    path:'ecommerce/detalle-producto',
    component:   EcommerceDetalleProductoComponent
  },
  {
    path:'foros',
    component:   ForoHomeComponent
  },
  {
    path:'foros/categorias',
    component:   ForoCategoriasComponent
  },
  {
    path:'foros/posts',
    component:   ForoPostsComponent
  },
  {
    path:'foros/post-nuevo',
    component:   ForoPostNuevoComponent
  },
 
  {
    path:'login',
    component:   SecurityLoginComponent
  } 
  ,
 
  {
    path:'login',
    component:   SecurityLoginComponent
  },
  {
    path:'login/nuevo',
    component:   SecurityNuevoComponent
  },
  {
    path:'login/olvidepass',
    component:   SecurityOlvidePassComponent
  },
  {
    path:'login/recuperarpass',
    component:   SecurityRecuperarPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
