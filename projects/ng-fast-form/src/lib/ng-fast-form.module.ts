import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFastFormComponent } from './ng-fast-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NgFastFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    NgFastFormComponent
  ]
})
export class NgFastFormModule { }
