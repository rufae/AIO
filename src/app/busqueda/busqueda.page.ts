import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonicModule, NavbarComponent, FooterComponent]
})
export class BusquedaPage {

    constructor(private router: Router) { }

    onClick(option: string) {
        console.log("Clicked option:", option);
        // Redirige según la opción seleccionada
        if (option === 'Alojamientos') {
            this.router.navigate(['/infoactividades']);
        } else if (option === 'Excursiones') {
            this.router.navigate(['/infoactividades']);
        } else if (option === 'Ocio') {
            this.router.navigate(['/infoactividades']);
        } else if (option === 'Restaurantes') {
            this.router.navigate(['/infoactividades']);
        }
    }


}
