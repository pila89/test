import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;
  let foo = 0;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
    foo += 1;
  });

  afterEach(() => {
    foo = 0;
  });
  beforeAll(() => {
    foo = 1;
  });
  afterAll(() => {
    foo = 0;
  });

  //beforeAll
  //beforeEach
  it('should be created', () => {
    console.log(foo);
    expect(service).toBeTruthy();
  });
  //afterEach

  //beforeEach
  it('should multipy 2 numbers', () => {
    console.log(foo);
    const resulat = service.multiply(2, 5);
    expect(resulat).toBe(10);
  });
  //afterEach
  //beforeEach

  it('should add 2 numbers', () => {
    console.log(foo);
    const resultat = service.addition(2, 5);
    expect(resultat).toBe(7);
  });
  //afterEach
  //afterAll
});
