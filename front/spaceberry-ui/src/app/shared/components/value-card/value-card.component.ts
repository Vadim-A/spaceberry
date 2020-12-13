import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueCardComponent implements OnInit {
  @Input() value: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
