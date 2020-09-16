import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomGuard} from './core/guards/custom.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {
    path: 'grupo-de-carros',
    canActivate: [CustomGuard],
    loadChildren: async () => (await import('./modules/car-group/car-group.module')).CarGroupModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
