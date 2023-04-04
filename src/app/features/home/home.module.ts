import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports:[SharedModule, HomeRoutingModule],
    exports:[HomeRoutingModule],
    declarations : [HomeComponent]
})
export class HomeModule {}