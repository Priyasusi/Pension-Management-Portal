import { TestBed } from '@angular/core/testing';

import { PensionerInputService } from './pensioner-input.service';

describe('PensionerInputService', () => {
  let service: PensionerInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionerInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
