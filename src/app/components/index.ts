import { EditorComponent } from './editor/editor.component';
import { EditorModule } from './editor/editor.module';
import { FileDropZoneComponent } from './file-drop-zone/file-drop-zone.component';
import { FileDropZoneModule } from './file-drop-zone/file-drop-zone.module';
import { PointDropperComponent } from './point-dropper/point-dropper.component';
import { PointDropperModule } from './point-dropper/point-dropper.module';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceListModule } from './space-list/space-list.module';

export const components: any[] = [
  EditorComponent,
  FileDropZoneComponent,
  PointDropperComponent,
  SpaceListComponent
];

export const modules: any[] = [
  EditorModule,
  FileDropZoneModule,
  PointDropperModule,
  SpaceListModule
];

export * from './editor/editor.component';
export * from './editor/editor.module';
export * from './file-drop-zone/file-drop-zone.component';
export * from './file-drop-zone/file-drop-zone.module';
export * from './point-dropper/point-dropper.component';
export * from './point-dropper/point-dropper.module';
export * from './space-list/space-list.component';
export * from './space-list/space-list.module';
