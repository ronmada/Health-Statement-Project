import { TestBed } from '@angular/core/testing';

import { SignatureService } from '../home/main-form/signature.service';

describe('SignatureService', () => {
  let service: SignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
