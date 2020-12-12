import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';
import { LineForPokComponent } from './chart-components/line-for-pok/line-for-pok.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, LineForPokComponent],
  imports: [AnalitycsRoutingModule, CommonModule, SharedModule],
})
export class AnalitycsModule {}
