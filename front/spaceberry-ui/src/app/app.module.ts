import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [AppComponent, AppShellComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
