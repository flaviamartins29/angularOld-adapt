import { TestBed } from '@angular/core/testing';

import { CursosServices } from './cursos.service';

describe('CursosServices', () => {
  let service: CursosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
