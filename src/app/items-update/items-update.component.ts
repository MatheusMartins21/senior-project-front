import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { unitMeasurement } from '../items-create/unitMeasurement.model';
import { isPerishable } from '../items-create/isPerishable.model';
import { Items } from '../items/items.model';

import { ItemsService } from '../items/items.service';

@Component({
  selector: 'sen-items-update',
  templateUrl: './items-update.component.html',
  styleUrls: ['./items-update.component.scss'],
  providers: [MessageService]
})

export class ItemsUpdateComponent implements OnInit {
  editableItem: Items[];
  items: Items[];

  unitMeasurementList: unitMeasurement[];
  isPerishableList: isPerishable[];

  state: any;

  uuid: any;
  name: string;
  unitMeasurement: string;
  quantity: number;
  price: number;
  isPerishable: boolean;
  expirationDate: Date;
  manufacturingDate: Date;

  constructor(private itemsService: ItemsService, private messageService: MessageService, private router: Router, private route: ActivatedRoute) {
    this.unitMeasurementList = [
      {name: 'Litro', value: 'lt'},
      {name: 'Quilograma', value: 'kg'},
      {name: 'Unidade', value: 'un'},
    ];

    this.isPerishableList = [
      {name: 'Sim', value: true},
      {name: 'Não', value: false}
    ];
  }

  setItems(items: Items[]) {
    this.itemsService.itemsData = items;
  }

  updateItem() {
    const newItem = {
      uuid: this.uuid,
      name: this.name,
      unitMeasurement: this.unitMeasurement,
      quantity: this.quantity,
      price: this.price,
      isPerishable: this.isPerishable,
      expirationDate: this.expirationDate,
      manufacturingDate: this.manufacturingDate
    };

    const newItems = this.items.map(item => item.uuid == this.uuid ? {
      ...item,
      name: newItem.name,
      unitMeasurement: newItem.unitMeasurement,
      quantity: newItem.quantity,
      price: newItem.price,
      isPerishable: newItem.isPerishable,
      expirationDate: newItem.expirationDate,
      manufacturingDate: newItem.manufacturingDate,
    }: item);

    this.items = newItems;
    this.setItems(newItems);
    this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Item atualizado com sucesso.'});

    setTimeout(() => {
      this.router.navigate(['/items']);
    }, 1000);
  }

  ngOnInit(): void {
    this.items = this.itemsService.items();

    this.route.queryParams.subscribe(params => {
      this.uuid = params['uuid'];
    });

    this.editableItem = this.itemsService.itemsData.filter((item) => item.uuid == this.uuid);

    const [ item ] = this.editableItem;

    this.name = item.name;
    this.unitMeasurement = item.unitMeasurement;
    this.quantity = item.quantity;
    this.price = item.price;
    this.isPerishable = item.isPerishable;
    this.expirationDate = item.expirationDate;
    this.manufacturingDate = item.manufacturingDate;
  }
}
