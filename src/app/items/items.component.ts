import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from "@angular/router"

import { Items } from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'sen-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [MessageService]
})

export class ItemsComponent implements OnInit {

  items: Items[];
  uuid: string;

  constructor(private itemsService: ItemsService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.itemsService.items();
  }

  setItems(items: Items[]) {
    this.itemsService.itemsData = items;
  }

  handleRemoveItem(uuid: string) {
    this.messageService.add({key: 'confirmDelete', sticky: true, severity:'warn', summary:'Você deseja realmente deletar este item?', detail:'Confirme para prosseguir.'});
    this.uuid = uuid;
  }

  onConfirm() {
    const newItems = this.items.filter((item) => item.uuid !== this.uuid);
    this.messageService.clear('confirmDelete');
    this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Item deletado com sucesso.'});

    this.items = newItems;
    this.setItems(this.items);
  }

  onReject() {
    this.messageService.clear('confirmDelete');
  }

  handleEditItem(uuid: string) {
    this.router.navigate(['/update-items'], { queryParams: { uuid: uuid } });
  }

}
