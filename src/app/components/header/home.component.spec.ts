import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
describe('App', () => {
  beforeEachProviders(() => [
    HeaderComponent
  ]);
  it ('should work', inject([HeaderComponent], (app: HeaderComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
