import { TestBed } from '@angular/core/testing';

import { ApartamentoRestService } from './apartamento-rest.service';

describe('ApartamentoRestService', () => {
  let service: ApartamentoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartamentoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
