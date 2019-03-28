import { TestBed } from '@angular/core/testing';

import { NgxMaterialColorpickerService } from './ngx-material-colorpicker.service';

describe('NgxMaterialColorpickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialColorpickerService = TestBed.get(NgxMaterialColorpickerService);
    expect(service).toBeTruthy();
  });
});
