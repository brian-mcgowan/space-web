import { v4 as uuid } from 'uuid';

import { ISpace } from '@interfaces';
import { Point } from "@models/point";

export class Space implements ISpace {
  public readonly id: string;
  public readonly bl_id: string;
  public readonly fl_id: string;
  public readonly s_id: string;
  private _coordinates: Point;

  constructor(bl_id: string, fl_id: string, s_id: string) {
    this.id = uuid().toString();
    this.bl_id = bl_id;
    this.fl_id = fl_id;
    this.s_id = s_id;
  }

  get coordinates(): Point {
    return this._coordinates;
  }

  set coordinates(point: Point) {
    this._coordinates = point;
  }
}
