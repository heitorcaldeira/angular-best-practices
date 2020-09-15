import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarGroupComponent} from './car-group.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: CarGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarGroupRoutingModule {
}
