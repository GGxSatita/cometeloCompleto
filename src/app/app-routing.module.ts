import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'completos',
    loadChildren: () => import('./pages/lista-completos/lista-completos.module').then(m => m.ListaCompletosPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle-completo/detalle-completo.module').then(m => m.DetalleCompletoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
