/*
import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing/testing_internal';
*/
import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [HeaderComponent] })
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        expect(fixture.componentInstance instanceof HeaderComponent).toBe(true, 'Should create Component');
    });
});
