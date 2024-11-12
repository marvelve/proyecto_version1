import { TestBed } from '@angular/core/testing';

import { ObrablancaService } from './obrablanca.service';

describe('ObrablancaService', () => {
  let service: ObrablancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObrablancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
