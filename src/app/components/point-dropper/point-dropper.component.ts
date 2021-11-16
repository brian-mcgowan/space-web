import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-dropper',
  templateUrl: './point-dropper.component.html',
  styleUrls: ['./point-dropper.component.css']
})
export class PointDropperComponent implements OnInit {
  spaceList: File;

  constructor() { }

  ngOnInit(): void {
  }

  onSpaceList(files: FileList) {
    this.spaceList = files[0];
  }

}
