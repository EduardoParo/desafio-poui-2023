import { OnInit, Directive, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoDynamicFormField,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { finalize, Subscription, take, tap } from 'rxjs';

import { CategoryService } from 'src/app/shared/services/categories/categories.service';
import { EntryService } from 'src/app/shared/services/entries/entries.service';

@Directive()
export abstract class BaseResourceListComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  columns!: PoTableColumn[];
  items!: any[];
  actions!: PoPageAction[];
  breadcrumb!: PoBreadcrumb;
  isLoading = false;
  activatedRoute: ActivatedRoute;
  fields!: PoDynamicFormField[];
  poNotification: PoNotificationService;
  dynamicForm = {};
  router!: Router;
  items$!: Subscription;
  titleModal = 'Novo';

  constructor(
    protected title: string,
    protected resourceService: CategoryService | EntryService,
    protected injector: Injector
  ) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.poNotification = injector.get(PoNotificationService);
  }

  ngOnInit(): void {
    this.onInitPage();
    this.onInitTable();
    this.onInitFields();
  }

  onInitPage(): void {
    this.onInitActions();
    this.onInitBreadCrumb();
  }

  async onInitTable(): Promise<void> {
    this.columns = await this.resourceService.getColumns();
    this.onLoadItems();
  }

  onLoadItems(): void {
    this.isLoading = true;
    this.items$ = this.resourceService
      .getAll()
      .pipe(
        tap(() =>this.items = []),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (res) => (this.items = res),
      });
  }

  onInitActions(): void {
    this.actions = [{ label: '+ Incluir', action: () => this.poModal.open() }];
  }

  onInitBreadCrumb(): void {
    this.breadcrumb = {
      items: [{ label: 'Home', link: '/' }, { label: this.title }],
    };
  }

  async onInitFields(): Promise<void> {
    this.fields = await this.resourceService.getDynamicFormFields();
  }

  submitForm(): void {
    this.resourceService
      .create(this.dynamicForm)
      .then(() => {
        this.poNotification.success('Registrado com Sucesso');
        this.onLoadItems();
        this.closeModal();
      })
      .catch(() => this.poNotification.success('Falha no Registro'));
  }

  receiverHandleActionEdit(row: any) {
    this.titleModal = 'Editar';
    this.dynamicForm = row;
    this.poModal.open();
  }

  closeModal(): void {
    this.titleModal = 'Novo';
    this.dynamicForm = {};
    this.poModal.close();
  }
}
