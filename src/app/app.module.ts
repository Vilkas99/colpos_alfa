import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeGaleriaComponent } from './home/home-galeria/home-galeria.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeSimuladorComponent } from './home/home-simulador/home-simulador.component';
import { HomeEcommerceComponent } from './home/home-ecommerce/home-ecommerce.component';
import { HomeNoticiasComponent } from './home/home-noticias/home-noticias.component';
import { HomeEventosComponent } from './home/home-eventos/home-eventos.component';
import { HomeContactoComponent } from './home/home-contacto/home-contacto.component';
import { HomeUbicacionComponent } from './home/home-ubicacion/home-ubicacion.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminGaleriasComponent } from './admin/admin-galerias/admin-galerias.component';
import { HomeCarruselComponent } from './home/home-carrusel/home-carrusel.component';
import { AdminNoticiasComponent } from './admin/admin-noticias/admin-noticias.component';
import { AdminEventosComponent } from './admin/admin-eventos/admin-eventos.component';
import { AdminInformacionBasicaComponent } from './admin/admin-informacion-basica/admin-informacion-basica.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SecurityLoginComponent } from './security/security-login/security-login.component';
import { SecurityNuevoComponent } from './security/security-nuevo/security-nuevo.component';
import { SecurityRecuperarPassComponent } from './security/security-recuperar-pass/security-recuperar-pass.component';
import { SecurityOlvidePassComponent } from './security/security-olvide-pass/security-olvide-pass.component';
import { SimuladorHomeComponent } from './simulador/simulador-home/simulador-home.component';
import { EcommerceHomeComponent } from './ecommerce/ecommerce-home/ecommerce-home.component';
import { EcommerceCategoriasComponent } from './ecommerce/ecommerce-categorias/ecommerce-categorias.component';
import { EcommerceProductosComponent } from './ecommerce/ecommerce-productos/ecommerce-productos.component';
import { EcommerceDetalleProductoComponent } from './ecommerce/ecommerce-detalle-producto/ecommerce-detalle-producto.component';
import { CursosHomeComponent } from './cursos/cursos-home/cursos-home.component';
import { CursosAulaComponent } from './cursos/cursos-aula/cursos-aula.component';
import { ForoHomeComponent } from './foros/foro-home/foro-home.component';
import { ForoCategoriasComponent } from './foros/foro-categorias/foro-categorias.component';
import { ForoPostsComponent } from './foros/foro-posts/foro-posts.component';
import { ForoPostNuevoComponent } from './foros/foro-post-nuevo/foro-post-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    HomeFooterComponent,
    HomeGaleriaComponent,
    HomeAboutComponent,
    HomeSimuladorComponent,
    HomeEcommerceComponent,
    HomeNoticiasComponent,
    HomeEventosComponent,
    HomeContactoComponent,
    HomeUbicacionComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    AdminGaleriasComponent,
    HomeCarruselComponent,
    AdminNoticiasComponent,
    AdminEventosComponent,
    AdminInformacionBasicaComponent,
    AdminAboutComponent,
    AdminUsuariosComponent,
    AdminLoginComponent,
    SecurityLoginComponent,
    SecurityNuevoComponent,
    SecurityRecuperarPassComponent,
    SecurityOlvidePassComponent,
    SimuladorHomeComponent,
    EcommerceHomeComponent,
    EcommerceCategoriasComponent,
    EcommerceProductosComponent,
    EcommerceDetalleProductoComponent,
    CursosHomeComponent,
    CursosAulaComponent,
    ForoHomeComponent,
    ForoCategoriasComponent,
    ForoPostsComponent,
    ForoPostNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
