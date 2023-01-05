import { TestBed } from '@angular/core/testing';

import { MonthlyResolver } from './monthly.resolver';

describe('MonthlyResolver', () => {
  let resolver: MonthlyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MonthlyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
