import { Injectable, Injector } from '@angular/core';
import { ForceOptionComponentEnum, PoDynamicFormField, PoTableColumn, PoTableColumnLabel } from '@po-ui/ng-components';
import { firstValueFrom } from 'rxjs';
import { ICategory } from '../../interfaces/category';
import { BaseResourceService } from '../base-resource/base-resource.service';
import { CategoryService } from '../categories/categories.service';

@Injectable({
  providedIn: 'root',
})
export class EntryService extends BaseResourceService {
  constructor(
    protected override injector: Injector,
    protected categoryService: CategoryService
  ) {
    super('api/entries', injector);
  }

  async getColumns(): Promise<PoTableColumn[]> {
    const categories = await this.getCategories();
    const labelsCategories = categories.map(item=>({ value: item.id, label: item.name, color: 'color-01',})) as PoTableColumnLabel[];
  
    return [
      { property: 'name', label: 'Lançamento' },
      { property: 'categoryId', label: 'Categoria', type: 'label', labels: labelsCategories},
      { property: 'date', label: 'Data', type: 'date'},
      { property: 'paid', label: 'Situação' },
      { property: 'type', label: 'Tipo' },
      { property: 'amount', label: 'Valor' },
    ];
  }

  async getDynamicFormFields(): Promise<PoDynamicFormField[]> {
    const categories = await this.getCategories();
    return [
      {
        order: 1,
        label: 'Lançamento',
        property: 'name',
        divider: '',
        required: true,
        minLength: 4,
        maxLength: 15,
        gridColumns: 12,
        gridSmColumns: 12,
        placeholder: 'Nome do lançamento',
      },
      {
        order: 2,
        label: 'Categoria',
        property: 'categoryId',
        gridColumns: 6,
        gridSmColumns: 6,
        options: categories,
        fieldLabel: 'name',
        fieldValue: 'id',
        forceOptionsComponentType:ForceOptionComponentEnum.select
      },
      {
        order: 6,
        label: 'Situação',
        property: 'paid',
        gridColumns: 12,
        type: 'boolean',
        booleanTrue: 'Pago',
        booleanFalse: 'Devendo',
        formatModel: true,
      },
      {
        order: 3,
        label: 'Data',
        property: 'date',
        type: 'date',
        format: 'mm/dd/yyyy',
        gridColumns: 6,
        gridSmColumns: 6,
        maxValue: '9999-01-01',
        errorMessage: 'The date must be before the year 9999.',
      },
      {
        order: 4,
        label: 'Valor',
        property: 'amount',
        type: 'currency',
        gridColumns: 6,
        gridSmColumns: 6,
        decimalsLength: 2,
        thousandMaxlength: 7,
        icon: 'po-icon-finance',
      },
      {
        order: 5,
        label: 'Tipo',
        property: 'type',
        gridColumns: 6,
        options: [
          { type: 'Receita', code: 1 },
          { type: 'Despesa', code: 2 }
        ],
        fieldLabel: 'type',
        fieldValue: 'type',
        forceOptionsComponentType:ForceOptionComponentEnum.select
      },
      {
        order: 7,
        label: 'Descrição',
        property: 'description',
        gridColumns: 12,
        gridSmColumns: 12,
        rows: 5,
        placeholder: 'Descrição',
      },
    ];
  }

  async getCategories(): Promise<ICategory[]> {
    return await firstValueFrom(
      this.categoryService.getAll()
    );
  }
}
