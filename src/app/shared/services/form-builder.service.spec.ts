/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormBuilderService } from './form-builder.service';

describe('FormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilderService]
    });
  });

  it('should ...', inject([FormBuilderService], (service: FormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
