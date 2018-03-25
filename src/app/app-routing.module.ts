import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTAR COMPONENTES
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },

  { path: 'bienvenido', component: IndexComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', redirectTo: 'bienvenido'}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
