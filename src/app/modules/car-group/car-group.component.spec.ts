import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGroupComponent } from './car-group.component';

describe('CarGroupComponent', () => {
  let component: CarGroupComponent;
  let fixture: ComponentFixture<CarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
