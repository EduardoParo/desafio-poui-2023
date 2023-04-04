import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { TableComponent } from './components/table/table.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';

@NgModule({
    declarations: [
        TableComponent,
        FilterInputComponent,
        FormModalComponent
    ],
    imports: [
        CommonModule,
        PoModule,
        PoTemplatesModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        PoModule,
        PoTemplatesModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TableComponent,
        FilterInputComponent,
        FormModalComponent
    ]
})
export class SharedModule {

}