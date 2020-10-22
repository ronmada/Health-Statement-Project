import { TestBed } from '@angular/core/testing';

import { PopoverService } from '../home/main-form/services/popover.service';

describe('PopoverService', () => {
  let service: PopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
