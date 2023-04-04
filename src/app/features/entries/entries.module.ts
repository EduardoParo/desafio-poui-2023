import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesComponent } from './entries/entries.component';

@NgModule({
    imports:[SharedModule, EntriesRoutingModule],
    exports:[EntriesRoutingModule],
    declarations : [EntriesComponent]
})
export class EntriesModule {}