import { TestBed } from '@angular/core/testing';

import { CustomGuard } from './custom.guard';

describe('CustomGuard', () => {
  let guard: CustomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
