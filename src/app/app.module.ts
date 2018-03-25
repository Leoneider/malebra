import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ServiciosComponent } from './index/servicios/servicios.component';
import { ListaServiciosComponent } from './index/servicios/lista-servicios/lista-servicios.component';
import { ServicioComponent } from './index/servicios/lista-servicios/servicio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { NuestrosValoresComponent } from './nuestros-valores/nuestros-valores.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ServiciosComponent,
    ListaServiciosComponent,
    ServicioComponent,
    EquipoComponent,
    FooterComponent,
    IndexComponent,
    ProductosComponent,
    NuestrosValoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
