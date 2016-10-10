/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MadamedeliaService } from './madamedelia.service';

describe('Service: Madamedelia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadamedeliaService]
    });
  });

  it('should ...', inject([MadamedeliaService], (service: MadamedeliaService) => {
    expect(service).toBeTruthy();
  }));
});
