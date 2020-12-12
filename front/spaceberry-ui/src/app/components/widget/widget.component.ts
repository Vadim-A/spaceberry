import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {

  @Input() value: any;
  @Input() valueMapper!: Function;
  @Input() single: Array<{
    name: string;
    value: number;
  }> = [];

  @Output() select = new EventEmitter<any>();

  view: any = [450, 300];

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };
  cardColor: string = '#232837';

  constructor() { }
  ngOnInit(): void {

  }
}
