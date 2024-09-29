import { TestBed } from '@angular/core/testing';

import { CoreHttpInterceptor } from './core-http.interceptor';

describe('CoreHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CoreHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CoreHttpInterceptor = TestBed.inject(CoreHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
