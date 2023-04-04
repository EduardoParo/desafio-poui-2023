import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [MenuComponent],
  declarations:[MenuComponent]
})
export class MenuModule {}
