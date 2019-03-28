import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialColorpickerComponent } from './ngx-material-colorpicker.component';

describe('NgxMaterialColorpickerComponent', () => {
  let component: NgxMaterialColorpickerComponent;
  let fixture: ComponentFixture<NgxMaterialColorpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialColorpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
