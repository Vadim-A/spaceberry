import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SupportRoutingModule } from './support-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SupportRoutingModule, CommonModule, SharedModule],
})
export class SupportModule {}
