import { Injectable, Injector } from '@angular/core';
import { PoDynamicFormField, PoTableColumn } from '@po-ui/ng-components';
import { BaseResourceService } from '../base-resource/base-resource.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseResourceService {

 constructor(protected override injector: Injector) {
    super("api/categories", injector);
  }

  async getColumns(): Promise<PoTableColumn[]> {
    return [
      { property: 'name', label: 'Categoria' },
    ];
  }

  async getDynamicFormFields(): Promise<PoDynamicFormField[]> {
    return [
      {
        label: 'Nome',
        property: 'name',
        divider: '',
        required: true,
        minLength: 4,
        maxLength: 15,
        gridColumns: 6,
        gridSmColumns: 12,
        order: 1,
        placeholder: 'Nome da categoria',
      },
      {
        label: 'Descrição',
        property: 'description',
        required: true,
        minLength: 4,
        maxLength: 20,
        gridColumns: 6,
        gridSmColumns: 12,
        order: 2,
        placeholder: 'Descrição da categoria',
      },
    ];
  }
}
