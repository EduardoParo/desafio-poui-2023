import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesGuard } from 'src/app/core/guards/categories/categories.guard';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
    {
        path:'',
        component: CategoriesComponent,
        resolve: {
            items: CategoriesGuard
        }
    },

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CategoriesRoutingModule {}