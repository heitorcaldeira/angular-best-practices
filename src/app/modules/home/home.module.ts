import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../core/layout/header/header.module';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeChildComponent } from './components/home-child/home-child.component';


@NgModule({
  declarations: [HomeComponent, HomeInfoComponent, HomeChildComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}

