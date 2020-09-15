import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../core/layout/header/header.module';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { OrkutTextPipe } from './pipes/orkut-text.pipe';


@NgModule({
  declarations: [HomeComponent, HomeInfoComponent, OrkutTextPipe],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
