import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  diagnosticsMessages = [
    {
      title: 'Кимберли, теплица 1',
      text: 'В Теплице 1 все датчики исправны!',
      class: 'accept',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 4',
      text: 'В Теплице 4 датчик «Кислотность почвы» вышел из строя!',
      class: 'error',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 3',
      text:
        'Обратите внимание! В Теплице 3 срок эксплуатации датчика «Температура» подходит к концу.',
      class: 'warring',
      date: '12.12.2054',
    },
  ];

  pokMessages = [
    {
      title: 'Кимберли, теплица 1',
      text: 'В Теплице 1 показатели в пределах нормы!',
      class: 'accept',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 5',
      text:
        'Обратите внимание! В Теплице 5 уровень влажности близится к 100%. ',
      class: 'disabled',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 3',
      text:
        'Обратите внимание! В Теплице 3 уровень температуры близится к 15 °C.',
      class: 'warring',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 2',
      text:
        'В Теплице 2 уровень освещения достиг 100! Необходимо снизить уровень освещения!',
      class: 'warring',
      date: '12.12.2054',
    },
    {
      title: 'Кимберли, теплица 1',
      text:
        'В Теплице 1 уровень кислотности достиг 8 Ph! Необходимо снизить уровень кислотности!',
      class: 'error',
      date: '12.12.2054',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
