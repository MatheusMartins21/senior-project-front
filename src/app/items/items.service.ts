import { v4 as uuidv4 } from 'uuid';

import { Items } from './items.model';

export class ItemsService {

  itemsData: Items[] = []

  constructor() {}

  items(): Items[] {
    return this.itemsData;
  }
}
