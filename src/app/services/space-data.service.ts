import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Point, Space } from '@models';

@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {
  private _spaces: BehaviorSubject<Space[]> = new BehaviorSubject<Space[]>([]);
  public readonly spaces: Observable<Space[]> = this._spaces.asObservable();

  constructor() { }

  addPointToSpace(space: Space, point: Point) {
    const spaces = this._spaces.getValue();
    let index = spaces.findIndex((el: Space) => el.id === space.id);
    if (index >= 0) {
      spaces[index].coordinates = point;
      this._spaces.next(spaces);
    }
  }

  addSpace(space: Space) {
    let spaces = this._spaces.getValue().concat(space);
    this._spaces.next(spaces);
  }

  getActiveSpace(): Space {
    const spaces = this._spaces.getValue();
    let index = spaces.findIndex((el: Space) => !el.coordinates);
    if (index >= 0) {
      return spaces[index];
    } else {
      // TODO: Come up with a more elegant way of handling click events with no unmapped spaces.
      return new Space('','','');
    }
  }

  removePointFromSpace(space: Space) {
    let spaces = this._spaces.getValue().map((el) => {
      if (el.id === space.id) {
        // TODO: Come up with a better schema which won't complain.
        // @ts-ignore
        delete el._coordinates;
      }
      return el;
    });
    this._spaces.next(spaces);
  }

  removeSpace(space: Space) {
    let spaces = this._spaces.getValue().filter((el) => el.id !== space.id);
    this._spaces.next(spaces);
  }
}
