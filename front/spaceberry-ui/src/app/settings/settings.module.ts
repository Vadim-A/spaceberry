import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { WidgetComponent } from '../components/widget/widget.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    WidgetComponent,
  ],
  imports: [SettingsRoutingModule, CommonModule, SharedModule],
})
export class SettingsModule {}
