import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarGroupRoutingModule } from './car-group-routing.module';
import { CarGroupComponent } from './car-group.component';
import {HeaderModule} from '../../core/layout/header/header.module';
import {CustomButtonModule} from '../../shared/components/custom-button/custom-button.module';


@NgModule({
  declarations: [CarGroupComponent],
  imports: [
    CommonModule,
    CarGroupRoutingModule,
    HeaderModule,
    CustomButtonModule
  ]
})
export class CarGroupModule { }
