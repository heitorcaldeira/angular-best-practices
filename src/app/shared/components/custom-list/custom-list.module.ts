import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomListComponent } from './custom-list.component';



@NgModule({
    declarations: [CustomListComponent],
    exports: [
        CustomListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CustomListModule { }
