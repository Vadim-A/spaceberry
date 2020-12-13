import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  view: any = [700, 400];


  single = [
    {
      "name": "Влажность почвы",
      "value": 79
    },
    {
      "name": "Освещенность",
      "value": 26
    },
    {
      "name": "Кислотность",
      "value": 13
    },
  ];

  valueMapper = (value: any) => `${value.value}%`

  ngOnInit(): void {
  }

  onSelect(e: any) {

  }
}
