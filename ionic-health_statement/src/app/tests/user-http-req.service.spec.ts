import { TestBed } from '@angular/core/testing';

import { UserHttpReqService } from '../home/user-http-req.service';

describe('UserHttpReqService', () => {
  let service: UserHttpReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
