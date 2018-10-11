import { TestBed } from '@angular/core/testing';

import { WeatherPointsService } from './weather-points.service';

describe('WeatherPointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherPointsService = TestBed.get(WeatherPointsService);
    expect(service).toBeTruthy();
  });
});
