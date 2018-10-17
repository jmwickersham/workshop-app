import { TestBed } from '@angular/core/testing';

import { EffectsService } from './effects.service';

describe('EffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EffectsService = TestBed.get(EffectsService);
    expect(service).toBeTruthy();
  });
});
