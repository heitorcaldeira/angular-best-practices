import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {Car} from './models/car.model';

@Component({
  selector: 'app-car-group',
  templateUrl: './car-group.component.html',
  styleUrls: ['./car-group.component.scss']
})
export class CarGroupComponent implements OnInit, OnDestroy {

  cars$ = new BehaviorSubject<Car[]>([]);
  destroy$ = new Subject();

  constructor() {
  }

  ngOnInit(): void {
    this.cars$.next(this.getCars());
    setInterval(() => this.cars$.next(this.getCars()), 1000);

    // this.cars$.subscribe(cars => console.log(cars));

    // this.cars$.pipe(
    //   take(1)
    // ).subscribe(cars => console.log(cars));

    this.cars$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(cars => console.log(cars));
  }

  getCars(): Car[] {
    return [
      {key: 1, value: 'Gol'},
      {key: 2, value: 'Uno'},
      {key: 3, value: 'Strada'},
      {key: 4, value: 'S10'},
      {key: 5, value: 'Ranger'},
      {key: 6, value: 'Voyage'},
      {key: 7, value: 'Toro'},
      {key: 8, value: 'Palio'},
      {key: 9, value: 'Tucson'},
      {key: 10, value: 'Onix'}
    ];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
