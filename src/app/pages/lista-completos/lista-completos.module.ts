import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCompletosPageRoutingModule } from './lista-completos-routing.module';

import { ListaCompletosPage } from './lista-completos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCompletosPageRoutingModule
  ],
  declarations: [ListaCompletosPage]
})
export class ListaCompletosPageModule {}
