import { TestBed } from '@angular/core/testing';
import { FilmsService} from './films.service';

describe('ApiFilmsServiceTsService', () => {
  let service: FilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
