import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-dropper',
  templateUrl: './point-dropper.component.html',
  styleUrls: ['./point-dropper.component.css']
})
export class PointDropperComponent implements OnInit {
  floorPlan: File;
  spaceList: File;

  constructor() { }

  ngOnInit(): void {
  }

  onFloorPlan(files: FileList) {
    this.floorPlan = files[0];
  }

  onSpaceList(files: FileList) {
    this.spaceList = files[0];
  }

}
