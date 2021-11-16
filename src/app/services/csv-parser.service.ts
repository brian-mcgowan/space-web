import { Injectable } from '@angular/core';
import { parse, ParseStepResult } from 'papaparse';

import { Space } from '@models';
import { SpaceDataService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {

  constructor(private spaceService: SpaceDataService) { }

  parseFile(file: File) {
    parse(file, {
      header: true,
      skipEmptyLines: true,
      step: (results: ParseStepResult<Space>) => {
        const space = new Space(results.data.bl_id, results.data.fl_id, results.data.s_id);
        this.spaceService.addSpace(space);
      },
      complete(): void {
        // Do nothing
      }
    });
  }

}
