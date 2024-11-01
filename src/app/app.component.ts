import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./core/header/header.component";
import { LandingPageComponent } from "./views/landing-page/landing-page.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		MatIconModule,
		HeaderComponent, //Importo el Componente HEADER
		LandingPageComponent, //Importo el Componente LANDING-PAGE
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "primerEjercicioAngular";
}
