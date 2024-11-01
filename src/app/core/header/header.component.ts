import { Component } from "@angular/core";
import { OutlineButtonComponent } from "../outline-button/outline-button.component";
import { HeaderMenuComponent } from "../header-menu/header-menu.component";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [OutlineButtonComponent, HeaderMenuComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent {
	menuItems = [
		{text:"Free Landing Page", route:"/free-landing-page"},
		{text:"Features", route:"/feature"},
		{text:"Service", route:"/service"},
		{text:"Pricing", route:"/pricing"},
		{text:"Contact", route:"/contact"},
	]
}
