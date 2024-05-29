import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SelectShippingCompanyComponent } from "./select-shipping-company/select-shipping-company.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SelectShippingCompanyComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
