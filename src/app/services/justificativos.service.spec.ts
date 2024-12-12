import { TestBed } from '@angular/core/testing';

import { JustificativosService } from './justificativos.service';

describe('JustificativosService', () => {
  let service: JustificativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustificativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
