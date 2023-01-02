import { TestBed } from '@angular/core/testing';

import { PensionDetailsService } from './pension-details.service';

describe('PensionDetailsService', () => {
  let service: PensionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
