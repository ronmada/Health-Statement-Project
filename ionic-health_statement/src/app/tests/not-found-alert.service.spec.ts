import { TestBed } from '@angular/core/testing';

import { NotFoundAlertService } from '../home/services/not-found-alert.service';

describe('NotFoundAlertService', () => {
  let service: NotFoundAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFoundAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
