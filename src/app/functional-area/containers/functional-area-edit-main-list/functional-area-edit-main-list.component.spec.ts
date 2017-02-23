/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FunctionalAreaEditMainListComponent } from './functional-area-edit-main-list.component';

describe('FunctionalAreaEditMainListComponent', () => {
  let component: FunctionalAreaEditMainListComponent;
  let fixture: ComponentFixture<FunctionalAreaEditMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalAreaEditMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalAreaEditMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
