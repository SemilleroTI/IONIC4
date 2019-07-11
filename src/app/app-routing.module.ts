import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//LA PAGINA DEL ROUTER DE ANGULAR, PARA QUE LA NAVEGACION FUNCIONE DE FORMA CORRECTA DEBEMOS COLOCAR NUESTRA PAGINAS AQUI
//ES POROCESO ES AUTOMATICO SI CREAMOS NUEVAS PAGINAS DESDE LA LINEA DE COMANDOS

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'dev', loadChildren: './dev/dev.module#DevPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
