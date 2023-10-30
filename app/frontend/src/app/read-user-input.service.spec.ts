import { TestBed } from '@angular/core/testing';

import { ReadUserInputService } from './read-user-input.service';

describe('ReadUserInputService', () => {
  let service: ReadUserInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadUserInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
