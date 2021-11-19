import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceListComponent } from './space-list.component';

@NgModule({
  declarations: [
    SpaceListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpaceListComponent
  ]
})
export class SpaceListModule { }
