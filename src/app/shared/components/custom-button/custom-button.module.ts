import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';



@NgModule({
    declarations: [CustomButtonComponent],
    exports: [
        CustomButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CustomButtonModule { }
