import { TestBed } from '@angular/core/testing';

import { ImageRenderService } from './image-render.service';

describe('ImageRenderService', () => {
  let service: ImageRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
