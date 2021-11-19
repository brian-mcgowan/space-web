import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Point } from '@models';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  private _points: BehaviorSubject<Point[]> = new BehaviorSubject<Point[]>([]);
  public readonly points: Observable<Point[]> = this._points.asObservable();

  constructor() { }

  addPoint(point: Point) {
    let spaces = this._points.getValue().concat(point);
    this._points.next(spaces);
  }

  removePoint(point: Point) {
    let spaces = this._points.getValue().filter((el) => el.id !== point.id);
    this._points.next(spaces);
  }
}
