import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SupplyOrdersRoutingModule } from './supply-orders-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SupplyOrdersRoutingModule, CommonModule],
})
export class SupplyOrdersModule {}
