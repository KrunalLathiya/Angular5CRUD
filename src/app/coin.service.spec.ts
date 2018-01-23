import { TestBed, inject } from '@angular/core/testing';

import { CoinService } from './coin.service';

describe('CoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService]
    });
  });

  it('should be created', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));
});
