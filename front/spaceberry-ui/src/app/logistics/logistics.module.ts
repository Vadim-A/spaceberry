import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { LogisticsRoutingModule } from './logistics-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [LogisticsRoutingModule, CommonModule],
})
export class LogisticsModule {}
