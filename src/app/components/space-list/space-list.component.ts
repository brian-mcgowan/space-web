import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { CsvParserService, SpaceDataService } from '@services';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnChanges, OnInit {
  @Input() file: File;

  constructor(
    private parserService: CsvParserService,
    public spaceServices: SpaceDataService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.file) this.parserService.parseFile(this.file);
  }

}
