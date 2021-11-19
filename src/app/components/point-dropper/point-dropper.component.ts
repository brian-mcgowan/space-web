import { Component, OnInit } from '@angular/core';

import { CsvWriterService } from '@services';

@Component({
  selector: 'app-point-dropper',
  templateUrl: './point-dropper.component.html',
  styleUrls: ['./point-dropper.component.css']
})
export class PointDropperComponent implements OnInit {
  floorPlan: File;
  spaceList: File;

  constructor(private csvWriter: CsvWriterService) { }

  ngOnInit(): void {
  }

  onDownload() {
    const csv = this.csvWriter.createCsv();
    const blob = new Blob([csv], { type: 'text/csv' });
    // @ts-ignore
    const url= window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${this.floorPlan.name}.csv`;
    link.href = url;
    link.click();
    link.remove();
  }

  onFloorPlan(files: FileList) {
    this.floorPlan = files[0];
  }

  onSpaceList(files: FileList) {
    this.spaceList = files[0];
  }

}
