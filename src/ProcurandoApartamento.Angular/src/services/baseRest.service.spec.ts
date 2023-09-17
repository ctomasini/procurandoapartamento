/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRestService } from './baseRest.service';

describe('Service: BaseRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseRestService]
    });
  });

  it('should ...', inject([BaseRestService], (service: BaseRestService) => {
    expect(service).toBeTruthy();
  }));
});
