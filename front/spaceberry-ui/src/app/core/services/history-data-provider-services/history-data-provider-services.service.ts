import { Injectable } from '@angular/core';
import { jsonDataDay } from './data-day';
import { jsonDataMonth } from './data-month';
import { jsonDataHarvest } from './data-harvest';

const momentFieldName = 'moment';
export enum PokName {
  air = 'air',
  water = 'water',
  light = 'light',
  acid = 'acid',
}

@Injectable({
  providedIn: 'root',
})
export class HistoryDataProviderService {
  private dataDay = [];
  private dataMonth = [];
  private dataHarvest = [];

  constructor() {
    this.dataDay = JSON.parse(jsonDataDay).reverse();
    this.dataMonth = JSON.parse(jsonDataMonth).reverse();
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

  getMonthlyDataByPok(
    aggregateId: number,
    pok: PokName,
    greenhouseId?: number,
    lastPeriodCount = -1
  ): { name: string; value: number }[] {
    if (!greenhouseId && pok !== PokName.air) {
      return [];
    }
    return this.dataMonth
      .slice(
        lastPeriodCount === -1 ? 0 : this.dataMonth.length - lastPeriodCount
      )
      .map((row) => ({
        name: row[momentFieldName],
        value: row[pok + (greenhouseId || '')] || null,
      }));
  }
}
