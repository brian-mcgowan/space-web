import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropZoneComponent } from './file-drop-zone.component';



@NgModule({
  declarations: [
    FileDropZoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileDropZoneComponent
  ]
})
export class FileDropZoneModule { }
