import { TestBed } from '@angular/core/testing';

import { ApiEndpointService } from './api-endpoint.service';

describe('ApiEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiEndpointService = TestBed.get(ApiEndpointService);
    expect(service).toBeTruthy();
  });
});
