import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CustomerSearchRoutingModule } from './customer-search-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CustomerSearchRoutingModule, CommonModule],
})
export class CustomerSearchModule {}
