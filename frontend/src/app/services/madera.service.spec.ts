import { TestBed } from '@angular/core/testing';

import { MaderaService } from './madera.service';

describe('MaderaService', () => {
  let service: MaderaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaderaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
