import { Component, Input, OnInit } from '@angular/core';
import { SidebarItem } from '../sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  items: SidebarItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(label: string): void {
    this.items = this.items.map(item => {
      if (item.label === label) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
  }
}