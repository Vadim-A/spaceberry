import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FarmRoutingModule } from './farm-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [FarmRoutingModule, CommonModule, SharedModule],
})
export class DiagnosticsModule {}
