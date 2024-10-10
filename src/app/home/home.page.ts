import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, NavbarComponent, FooterComponent, FormsModule],
})
export class HomePage {
    adults: number;
    children: number;
    rooms: number;

    constructor(private router: Router) {
        this.adults = 0;
        this.children = 0;
        this.rooms = 0;
    }

    goToSearch() {
        this.router.navigate(['/busqueda']);
    }
    goToChat() {
        this.router.navigate(['/chats']); // Cambia '/chat' a la ruta correcta
    }
}
