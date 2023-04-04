import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    imports:[SharedModule, CategoriesRoutingModule],
    exports:[CategoriesRoutingModule],
    declarations : [CategoriesComponent]
})
export class CategoriesModule {}