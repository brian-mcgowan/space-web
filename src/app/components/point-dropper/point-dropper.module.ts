import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@components/editor/editor.module';
import { FileDropZoneModule } from '@components/file-drop-zone/file-drop-zone.module';
import { SpaceListModule } from '@components/space-list/space-list.module';
import { PointDropperRoutingModule } from './point-dropper-routing.module';
import { PointDropperComponent } from './point-dropper.component';

@NgModule({
  declarations: [
    PointDropperComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FileDropZoneModule,
    PointDropperRoutingModule,
    SpaceListModule
  ],
  exports: [
    PointDropperComponent
  ]
})
export class PointDropperModule { }
