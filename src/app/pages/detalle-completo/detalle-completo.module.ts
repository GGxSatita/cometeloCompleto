import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCompletoPageRoutingModule } from './detalle-completo-routing.module';

import { DetalleCompletoPage } from './detalle-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCompletoPageRoutingModule
  ],
  declarations: [DetalleCompletoPage]
})
export class DetalleCompletoPageModule {}
