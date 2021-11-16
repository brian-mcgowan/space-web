import { FileDropZoneComponent } from './file-drop-zone/file-drop-zone.component';
import { FileDropZoneModule } from './file-drop-zone/file-drop-zone.module';
import { PointDropperComponent } from './point-dropper/point-dropper.component';
import { PointDropperModule } from './point-dropper/point-dropper.module';

export const components: any[] = [
  FileDropZoneComponent,
  PointDropperComponent
];

export const modules: any[] = [
  FileDropZoneModule,
  PointDropperModule
];

export * from './file-drop-zone/file-drop-zone.component';
export * from './file-drop-zone/file-drop-zone.module';
export * from './point-dropper/point-dropper.component';
export * from './point-dropper/point-dropper.module';
