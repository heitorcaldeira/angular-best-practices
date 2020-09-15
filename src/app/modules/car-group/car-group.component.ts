import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Car} from './models/car.model';

@Component({
  selector: 'app-car-group',
  templateUrl: './car-group.component.html',
  styleUrls: ['./car-group.component.scss']
})
export class CarGroupComponent implements OnInit, OnDestroy {

  loading$ = new BehaviorSubject<boolean>(false);
  cars$ = new BehaviorSubject<Car[]>([]);
  formGroup: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      searchValue: ''
    });

    this.cars$.next(this.getCars());

    this.handleInput();
  }

  handleInput(): void {
    this.subscription = this.formGroup.controls.searchValue.valueChanges.pipe(
      tap(_ => this.loading$.next(true)),
      debounceTime(400),
      switchMap(input => {
        const filter = this.getCars().filter(v => v.value.toLowerCase().indexOf(input.toLowerCase()) !== -1);
        return of(filter);
      })
    ).subscribe(values => {
      this.loading$.next(false);
      this.cars$.next(values);
    });
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
