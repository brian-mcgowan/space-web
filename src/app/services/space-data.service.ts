import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Space } from '@models';

@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {
  private _spaces: BehaviorSubject<Space[]> = new BehaviorSubject<Space[]>([]);
  public readonly spaces: Observable<Space[]> = this._spaces.asObservable();

  constructor() { }

  addSpace(space: Space) {
    let spaces = this._spaces.getValue().concat(space);
    this._spaces.next(spaces);
  }

  removeSpace(space: Space) {
    let spaces = this._spaces.getValue().filter((el) => el.id !== space.id);
    this._spaces.next(spaces);
  }
}
