import { Component, Input } from "@angular/core";

@Component({
	selector: "app-icon-card",
	standalone: true,
	imports: [],
	templateUrl: "./icon-card.component.html",
	styleUrl: "./icon-card.component.css",
})
export class IconCardComponent {
	@Input() icon = "";
	@Input() title = "";
	@Input() description = "";
}
