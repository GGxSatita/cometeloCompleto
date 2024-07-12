import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCompletosPage } from './lista-completos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCompletosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCompletosPageRoutingModule {}
