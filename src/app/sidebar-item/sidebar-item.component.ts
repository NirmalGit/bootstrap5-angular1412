import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sidebar-item",
  templateUrl: "./sidebar-item.component.html",
  styleUrls: ["./sidebar-item.component.scss"]
})
export class SidebarItemComponent implements OnInit {
  @Input()
  icon: string;

  @Input()
  label: string;

  @Input()
  active = false;

  @Output()
  selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event): void {
    event.preventDefault();
    this.selected.emit(this.label);
  }
}
