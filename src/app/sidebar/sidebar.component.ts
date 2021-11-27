import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sen-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() display: boolean;

  @Output() onHideSidebar = new EventEmitter<boolean>();

  closeSidebar = () => {
    this.onHideSidebar.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
