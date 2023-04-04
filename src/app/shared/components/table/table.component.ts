import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  @Input() columns!: PoTableColumn[];
  @Input() items!: any[];
  @Input() isLoading = false;
  @Output() handleEdit = new EventEmitter();
  tableActions!: PoTableAction[];

  ngOnInit(): void {
    this.tableActions = [
      {
        action: this.handleActionEdit.bind(this),
        icon: 'po-icon-edit',
        label: 'Editar',
      },
      {
        action: () => {},
        icon: 'po-icon-trash',
        label: 'Excluir',
      },
    ];
  }

  handleActionEdit(row: any): void {
    this.handleEdit.emit(row);
  }
}
