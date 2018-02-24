import { TestBed, inject } from '@angular/core/testing';

import { DomainServiceService } from './domain-service.service';

describe('DomainServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainServiceService]
    });
  });

  it('should be created', inject([DomainServiceService], (service: DomainServiceService) => {
    expect(service).toBeTruthy();
  }));
});
