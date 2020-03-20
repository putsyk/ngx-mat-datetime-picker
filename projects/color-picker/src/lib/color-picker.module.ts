import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMatColorPickerComponent, NgxMatPaletteComponent } from './components';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NgxMatColorPickerComponent,
    NgxMatPaletteComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    NgxMatColorPickerComponent
  ]
})
export class NgxMatColorPickerModule { }