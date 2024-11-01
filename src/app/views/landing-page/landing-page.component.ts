import { Component } from "@angular/core";
import { PresentationComponent } from "./presentation/presentation.component";
import { IconCardComponent } from "../../core/icon-card/icon-card.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [PresentationComponent, IconCardComponent, CommonModule],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.css",
})
export class LandingPageComponent {
	features = [
		{
			icon: "add_box",
			title: "Easy to use",
			description:
				"Editin and customizing Essential Landing is easy and fast.",
		},
		{
			icon: "star_half",
			title: "100% Responsive",
			description:
				"Editin and customizing Essential Landing is easy and fast.",
		},
		{
			icon: "system_update_alt",
			title: "+50 New Pages",
			description:
				"Editin and customizing Essential Landing is easy and fast.",
		},
    /*
    ! Puedo Agregar mas icon 
    */
/*     {
      icon: "HOLA",
			title: "+500 New Pages",
			description:
				"Editin and customizing Essential Landing is easy and fast.",
    } */
	];
}
