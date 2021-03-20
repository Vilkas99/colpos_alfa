import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

import { HomeCarruselComponent } from './home/home-carrusel/home-carrusel.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeEcommerceComponent } from './home/home-ecommerce/home-ecommerce.component';
import { HomeEventosComponent } from './home/home-eventos/home-eventos.component';
import { HomeNoticiasComponent } from './home/home-noticias/home-noticias.component';
import { HomeGaleriaComponent } from './home/home-galeria/home-galeria.component';
import { CursosHomeComponent } from './cursos/cursos-home/cursos-home.component';
import { ForoHomeComponent } from './foros/foro-home/foro-home.component';
import { SecurityLoginComponent } from './security/security-login/security-login.component';
import { CursosAulaComponent } from './cursos/cursos-aula/cursos-aula.component';

import { AdminComponent } from './admin/admin/admin.component';

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
    path:'foros',
    component:   ForoHomeComponent
  },
  {
    path:'login',
    component:   SecurityLoginComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
