import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  HistoryDataProviderService,
  PokName,
} from 'src/app/core/services/history-data-provider-services/history-data-provider-services.service';

@Component({
  selector: 'app-line-for-pok',
  templateUrl: './line-for-pok.component.html',
  styleUrls: ['./line-for-pok.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineForPokComponent implements OnInit {
  @Input() aggregateId!: number;
  @Input() greenhouseId: number[] = [1, 2, 3, 4, 5];
  @Input() pok!: PokName;
  @Input() lastPeriodCount = 12;
  @Input() xAxisLabel: string = 'Месяц';
  @Input() yAxisLabel: string = 'Значение';

  chardData: any[] = [];
  view: [number, number] = [350, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#7cc351', '#f26cdd', '#77dff5', '#fcba11', '#ee3d5d']
  };

  constructor(private historyDataProviderService: HistoryDataProviderService) {}

  ngOnInit(): void {
    const data1 = this.historyDataProviderService.getMonthlyDataByPok(
      1,
      this.pok,
      undefined,
      this.lastPeriodCount
    );

    if (this.pok === PokName.air) {
      this.chardData = [
        {
          name: 'Комплекс ' + this.aggregateId,
          series: data1
        },
      ];
    } else {
      this.chardData = this.greenhouseId.map((greenhouseId) => ({
        name: 'Теплица ' + greenhouseId,
        series: [
          ...this.historyDataProviderService.getMonthlyDataByPok(
            1,
            this.pok,
            greenhouseId,
            this.lastPeriodCount
          ),
        ],
      }));
    }
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
