import { Component, Injector } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { CategoryService } from 'src/app/shared/services/categories/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
})
export class CategoriesComponent extends BaseResourceListComponent {
  constructor(
    private categoryService: CategoryService,
    protected override injector: Injector
  ) {
    super('Categorias', categoryService, injector);
  }

  onSearchResources(res: any):void {

  }
}
