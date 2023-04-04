import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { CategoryService } from 'src/app/shared/services/categories/categories.service';
import { ICategory } from '../../../shared/interfaces/category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesGuard implements Resolve<ICategory> {
  constructor(
    private categoriesService: CategoryService,
    private poNotification: PoNotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategory> {
    return this.categoriesService.getAll();
  }
}

