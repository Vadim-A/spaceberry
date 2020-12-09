import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [HomeRoutingModule, CommonModule],
})
export class HomeModule {}
