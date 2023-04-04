import { Component,Injector } from '@angular/core';
import { BaseResourceListComponent } from './../../../shared/components/base-resource-list/base-resource-list.component';
import { EntryService } from 'src/app/shared/services/entries/entries.service';

@Component({
    selector:'app-entries',
    templateUrl:'entries.component.html'
})
export class EntriesComponent extends BaseResourceListComponent {
    constructor(
        private entryService: EntryService,
        protected override injector: Injector
        ) { 
        super('Lançamentos',entryService, injector);
    }
    
}