import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as p5 from 'p5';

import { Point } from '@models/point';
import { ImageRenderService, PointService } from '@services';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnChanges, OnInit {
  @Input() file: File;
  image: string | ArrayBuffer | null;
  points: Point[];
  @ViewChild('editor', { read: ElementRef, static: true}) editor: ElementRef;

  constructor(
    private imageService: ImageRenderService,
    private pointService: PointService
  ) { }

  ngOnInit(): void {
    this.pointService.points.subscribe((points) => { this.points = points });
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.image = await this.imageService.read(changes.file.currentValue);
    this.generateSketch();
  }

  generateSketch() {
    const sketch = (s: any) => {
      let img: any;

      s.preload = () => {
        if (typeof this.image === 'string') {
          img = s.loadImage(this.image);
        }
      }

      s.setup = () => {
        s.createCanvas(img.width, img.height);
        s.image(img, 0, 0);

        s.stroke('#ffa71a');
        s.strokeWeight(16);
      }

      s.mouseClicked = () => {
        const point = new Point(s.mouseX, s.mouseY);
        this.pointService.addPoint(point);
        s.point(s.mouseX, s.mouseY);
      }

      s.draw = () => {
        s.image(img, 0, 0);
        for (let i = 0; i < this.points.length; i++) {
          s.point(this.points[i].x, this.points[i].y);
        }
      }
    }

    new p5(sketch, this.editor.nativeElement);
  }

}
