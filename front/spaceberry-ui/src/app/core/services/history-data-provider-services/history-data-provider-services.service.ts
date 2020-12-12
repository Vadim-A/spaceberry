import { Injectable } from '@angular/core';
import { jsonDataDay } from './data-day';
import { jsonDataMonth } from './data-month';
import { jsonDataHarvest } from './data-harvest';

@Injectable({
  providedIn: 'root',
})
export class HistoryDataProviderService {
  private dataDay = [];
  private dataMonth = [];
  private dataHarvest = [];

  private = [
    [
      { moment: '2052-03-31', val: 7.1 },
      { moment: '2052-06-30', val: 12.0 },
      { moment: '2052-09-30', val: 10.0 },
      { moment: '2052-12-31', val: 6.2 },
      { moment: '2053-03-31', val: 7.5 },
      { moment: '2053-06-30', val: 14.0 },
      { moment: '2053-09-30', val: 12.3 },
      { moment: '2053-12-31', val: 5.6 },
      { moment: '2054-03-31', val: 4.9 },
      { moment: '2054-06-30', val: 16.7 },
      { moment: '2054-09-30', val: 9.4 },
      { moment: '2054-12-03', val: 13.7 },
    ],
  ];
  constructor() {
    this.dataDay = JSON.parse(jsonDataDay);
    this.dataMonth = JSON.parse(jsonDataMonth);
    this.dataHarvest = JSON.parse(jsonDataHarvest);
  }

  getDaylyData() {
    return this.dataDay;
  }

  getMonthlyData() {
    return this.dataMonth;
  }

  getHarvestData() {
    return this.dataHarvest;
  }
}
