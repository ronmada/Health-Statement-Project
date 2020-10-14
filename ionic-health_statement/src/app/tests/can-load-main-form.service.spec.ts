import { TestBed } from '@angular/core/testing';

import { CanLoadMainFormService } from '../home/main-form/can-load-main-form.service';

describe('CanLoadMainFormService', () => {
  let service: CanLoadMainFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadMainFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
