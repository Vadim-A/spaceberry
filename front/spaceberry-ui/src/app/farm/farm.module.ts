import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [DiagnosticsRoutingModule, CommonModule],
})
export class DiagnosticsModule {}
