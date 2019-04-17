import { TestBed } from '@angular/core/testing';

import { ServiceGetDataOnLineService } from './service-get-data-on-line.service';

describe('ServiceGetDataOnLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGetDataOnLineService = TestBed.get(ServiceGetDataOnLineService);
    expect(service).toBeTruthy();
  });
});
