import { Injectable } from '@angular/core';
import { unparse } from 'papaparse';

import { Space } from '@models';
import { SpaceDataService } from '@services/space-data.service';

@Injectable({
  providedIn: 'root'
})
export class CsvWriterService {
  private spaces: Space[]

  constructor(private spaceService: SpaceDataService) {
    this.spaceService.spaces.subscribe((spaces: Space[]) => this.spaces = spaces);
  }

  createCsv() {
    let spaces = this.spaces.filter((space) => space.coordinates).map((el) => el.toObject());
    return unparse(spaces);
  }
}
