import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { EntriesGuard } from '../../core/guards/entries/entries.guard';


const routes: Routes = [
    {
        path:'',
        component: EntriesComponent,
        resolve: {
            items: EntriesGuard
        }
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EntriesRoutingModule {}