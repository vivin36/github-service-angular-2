import { TestBed, inject } from '@angular/core/testing';

import { GithubservicesService } from './githubservices.service';

describe('GithubservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubservicesService]
    });
  });

  it('should be created', inject([GithubservicesService], (service: GithubservicesService) => {
    expect(service).toBeTruthy();
  }));
});
