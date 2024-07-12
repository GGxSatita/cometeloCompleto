import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCompletoPage } from './detalle-completo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCompletoPageRoutingModule {}
