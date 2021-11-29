import { Component, OnInit } from '@angular/core';

import { Items } from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'sen-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Items[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.items();
  }

  handleRemoveItem() {

  }

}
