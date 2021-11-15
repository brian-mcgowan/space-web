import { v4 as uuid } from 'uuid';

import { ISpace } from '@interfaces';

export class Space implements ISpace {
  public readonly id: string;
  public readonly bl_id: string;
  public readonly fl_id: string;
  public readonly s_id: string;

  constructor(bl_id: string, fl_id: string, s_id: string) {
    this.id = uuid().toString();
    this.bl_id = bl_id;
    this.fl_id = fl_id;
    this.s_id = s_id;
  }
}
