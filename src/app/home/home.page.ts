import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";
import {
    chevronDownCircle,
    chevronForwardCircle,
    chevronUpCircle,
    person,
    cog,
    searchOutline
} from 'ionicons/icons';
import {FormsModule} from "@angular/forms";
import {NavbarFooterService} from "../navbar-footer.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, NavbarComponent, FooterComponent, FormsModule, NgForOf],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
    adults: number;
    children: number;
    rooms: number;

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router
    ) {
        this.adults = 0;
        this.children = 0;
        this.rooms = 0;

        addIcons({chevronDownCircle, chevronForwardCircle, chevronUpCircle, person, cog, searchOutline})
    }

    images = [
        {
            image: "assets/images/hotel.png"
        },
        {
            image: 'assets/images/apartamento.png'
        },{
            image: 'assets/images/villa.jpg'
        }
    ];

    goToSearch() {
        this.router.navigate(['/busqueda']);
    }
    goToChat() {
        this.router.navigate(['/chats']);
    }
    goToSettings() {
        this.router.navigate(['/settings']);
    }
    goToPerfil() {
        this.router.navigate(['/perfil']);
    }

    ngOnInit() {
        // Ocultar navbar y footer al entrar en la vista
        this.navbarFooterService.setFooterVisible(true);
        this.navbarFooterService.setNavbarVisible(true);
    }
}
