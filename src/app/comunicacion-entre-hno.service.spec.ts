import { TestBed } from '@angular/core/testing';

import { ComunicacionEntreHnoService } from './comunicacion-entre-hno.service';

describe('ComunicacionEntreHnoService', () => {
  let service: ComunicacionEntreHnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionEntreHnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
