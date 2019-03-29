import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { ColorpickerComponent, ColorpickerSliderDirective, TextDirective } from './ngx-material-colorpicker.component';
import { ColorUtil } from './color-util';

@NgModule({
  declarations: [
    ColorpickerComponent,
    ColorpickerSliderDirective,
    TextDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    A11yModule
  ],
  exports: [
    ColorpickerComponent,
    ColorpickerSliderDirective,
    TextDirective
  ],
  providers: [
    ColorUtil
  ]
})
export class ColorpickerModule { }
