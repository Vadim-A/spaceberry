import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SettingsRoutingModule, CommonModule],
})
export class SettingsModule {}
