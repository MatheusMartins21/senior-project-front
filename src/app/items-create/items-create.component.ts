import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from "@angular/router"

import { v4 as uuidv4 } from 'uuid';

import { unitMeasurement } from './unitMeasurement.model';
import { isPerishable } from './isPerishable.model';
import { Items } from '../items/items.model';

import { ItemsService } from '../items/items.service';

@Component({
  selector: 'sen-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.scss'],
  providers: [MessageService]
})

export class ItemsCreateComponent implements OnInit {
  items: Items[];

  unitMeasurementList: unitMeasurement[];
  isPerishableList: isPerishable[];

  uuid: string = uuidv4();
  name: string;
  unitMeasurement: string;
  quantity: number;
  price: number;
  isPerishable: boolean;
  expirationDate: Date;
  manufacturingDate: Date;

  constructor(private itemsService: ItemsService, private messageService: MessageService, private router: Router) {
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

  validateItem(items: Items[]) {
    let error = false;
    const [ item ] = items;

    if(item.name == undefined) {
      this.messageService.add({severity:'warn', summary:'Aviso!', detail:'Por favor, digite um nome válido para o produto.'});
      error = true;
    }

    if(item.price == undefined) {
      this.messageService.add({severity:'warn', summary:'Aviso!', detail:'Por favor, digite um preço válido para o produto.'});
      error = true;
    }

    if(item.isPerishable == true && item.expirationDate == undefined) {
      this.messageService.add({severity:'warn', summary:'Aviso!', detail:'Por favor, informe uma data de validade válida para o produto.'});
      error = true;
    }

    if(item.isPerishable == true && item.expirationDate == undefined) {
      this.messageService.add({severity:'warn', summary:'Aviso!', detail:'Por favor, informe uma data de fabricação válida para o produto.'});
      error = true;
    }

    if(error == true)
      return;
  }

  createItem() {
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

    this.validateItem([newItem]);

    this.items.push(newItem);
    this.setItems(this.items);
    this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Item cadastrado com sucesso.'});

    setTimeout(() => {
      this.router.navigate(['/items']);
    }, 1000);
  }

  ngOnInit(): void {
    this.items = this.itemsService.items();
  }
}
