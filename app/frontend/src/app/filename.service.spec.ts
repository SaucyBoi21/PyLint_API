import { TestBed } from '@angular/core/testing';

import { FilenameService } from './filename.service';

describe('FilenameService', () => {
  let service: FilenameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilenameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
