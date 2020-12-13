import { Component, OnInit } from '@angular/core';
import { PokName } from 'src/app/core/services/history-data-provider-services/history-data-provider-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  pokName = PokName;
  constructor() {}

  ngOnInit(): void {}
}
