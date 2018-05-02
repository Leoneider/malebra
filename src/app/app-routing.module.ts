import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTAR COMPONENTES
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { Index2Component } from './index2/index2.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


const routes: Routes = [

  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },

  { path: 'productos', component: Index2Component },


  { path: 'bienvenido', component: IndexComponent },

  { path: 'quienes-somos', component: QuienesSomosComponent },

  // { path: 'registro', component: ProductosComponent },



  { path: '**', redirectTo: 'bienvenido'}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
