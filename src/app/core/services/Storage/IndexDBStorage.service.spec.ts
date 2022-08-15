/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexDBStorageService } from './IndexDBStorage.service';

describe('Service: IndexDBStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexDBStorageService]
    });
  });

  it('should ...', inject([IndexDBStorageService], (service: IndexDBStorageService) => {
    expect(service).toBeTruthy();
  }));
});
