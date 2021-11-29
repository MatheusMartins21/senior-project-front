import { v4 as uuidv4 } from 'uuid';

import { Items } from './items.model';

export class ItemsService {

  itemsData: Items[] = [
    { uuid: uuidv4(), name: 'Caneta', unitMeasurement: 'Un', quantity: 23, price: 3, isPerishable: false, expirationDate: new Date(), manufacturingDate: new Date() },
    { uuid: uuidv4(), name: 'Camiseta', unitMeasurement: 'Un', quantity: 12, price: 20.50, isPerishable: false, expirationDate: new Date(), manufacturingDate: new Date() },
  ]

  constructor() {}

  items(): Items[] {
    return this.itemsData;
  }
}
