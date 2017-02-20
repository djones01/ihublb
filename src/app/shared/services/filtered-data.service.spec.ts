/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilteredDataService } from './filtered-data.service';

describe('FilteredDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilteredDataService]
    });
  });

  it('should ...', inject([FilteredDataService], (service: FilteredDataService) => {
    expect(service).toBeTruthy();
  }));
});
