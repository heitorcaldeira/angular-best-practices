import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLazyComponent } from './home-lazy.component';

describe('HomeLazyComponent', () => {
  let component: HomeLazyComponent;
  let fixture: ComponentFixture<HomeLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
