import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; //?
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
import { WidgetComponent } from '../components/widget/widget.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    CdkTreeModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
    NgxChartsModule,
    PieChartModule,
  ],
  declarations: [
    WidgetComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    CdkTreeModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
    NgxChartsModule,
    PieChartModule,
    WidgetComponent
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }, // что бы небыло анимации при нажатии на кнопки
  ],
})
export class SharedModule {}
