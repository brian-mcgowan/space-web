import { v4 as uuid } from 'uuid';

import { IPoint } from '@interfaces';

export class Point implements IPoint {
  public readonly id: string;
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.id = uuid().toString();
    this.x = x;
    this.y = y;
  }
}
