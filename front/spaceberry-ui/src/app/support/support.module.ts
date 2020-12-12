import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SupportRoutingModule, CommonModule],
})
export class SupportModule {}
