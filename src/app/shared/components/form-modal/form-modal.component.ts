import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PoDynamicFormField, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-modal',
  templateUrl: 'form-modal.component.html',
})
export class FormModalComponent {
 // @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @Input() titleModal = '';
  @Input() dynamicForm = {};
  @Input() fields!: PoDynamicFormField[];

  @Input() set openModal(value: string) {
    if (value) {
     // this.poModal.open();
    }
  }
  @Output() closeModal = new EventEmitter();

  close(): void {
  //  this.poModal.close();
    this.closeModal.emit();
  }
}

/*---------------
<tgv-modal-company-branch
[openModal]="isModalOpen"
(closeModal)="closeCompanyBranchModalEvent()"
>
</tgv-modal-company-branch>
--------------------------*/
