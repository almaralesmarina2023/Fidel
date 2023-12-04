import { TestBed } from '@angular/core/testing';

import { InfoReService } from './info-re.service';

describe('InfoReService', () => {
  let service: InfoReService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoReService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
