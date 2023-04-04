import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryDataBase } from '../in-memory-database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase),
    MenuModule
  ],
  exports: [
    SharedModule,
    HttpClientModule,
    MenuModule
  ],
})
export class CoreModule {}
