import { Component } from "@angular/core";
import { SidebarItem } from "./sidebar-item.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  sidebarItems: SidebarItem[] = [
    {
      icon: "house-door",
      label: "Home",
      active: true
    },
    {
      icon: "speedometer2",
      label: "Dashboard"
    },
    {
      icon: "table",
      label: "Orders"
    },
    {
      icon: "grid",
      label: "Products"
    },
    {
      icon: "person-circle",
      label: "Customers"
    }
  ];
}
