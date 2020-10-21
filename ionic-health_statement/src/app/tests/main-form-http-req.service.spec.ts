import { TestBed } from '@angular/core/testing';

import { MainFormHttpReqService } from '../home/main-form/services/main-form-http-req.service';

describe('MainFormHttpReqService', () => {
  let service: MainFormHttpReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainFormHttpReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
