import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [AnalitycsRoutingModule, CommonModule],
})
export class AnalitycsModule {}
