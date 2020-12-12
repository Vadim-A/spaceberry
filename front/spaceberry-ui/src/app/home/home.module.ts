import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [MainComponent, PieChartComponent],
  imports: [HomeRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}
