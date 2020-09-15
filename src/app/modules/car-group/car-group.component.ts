import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-group',
  templateUrl: './car-group.component.html',
  styleUrls: ['./car-group.component.scss']
})
export class CarGroupComponent implements OnInit {

  cars = [];

  constructor() { }

  ngOnInit(): void {
    this.cars = [
      {key: 1, value: 'Gol'},
      {key: 2, value: 'Uno'},
      {key: 3, value: 'Strada'}
    ];
  }

  updateList(): void {
    this.cars = [
      {key: 1, value: 'Gol'},
      {key: 2, value: 'Uno'},
      {key: 3, value: 'Strada'},
      {key: 4, value: 'S10'},
      {key: 5, value: 'Ranger'},
    ];
  }

}
