import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [MessagesRoutingModule, CommonModule],
})
export class MessagesRoutingModuleModule {}
