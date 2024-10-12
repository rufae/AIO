import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {ActividadesComponent} from "../actividades/actividades.component";
import { NavbarFooterService } from '../navbar-footer.service';
import {addIcons} from "ionicons";
import {attach, videocamOutline, arrowUndo, ellipsisVertical, mic} from "ionicons/icons";
import { Router } from '@angular/router';


@Component({
    selector: 'app-chatunico',
    templateUrl: './chatunico.component.html',
    styleUrls: ['./chatunico.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule
    ]
})
export class ChatUnicoComponent implements OnInit, OnDestroy {

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router
    ) {
        addIcons({ videocamOutline, attach, arrowUndo, ellipsisVertical, mic });
    }


    goToChat() {
        this.router.navigate(['/chats']); // Cambia '/chat' a la ruta correcta
    }

    ngOnInit() {
        // Ocultar navbar y footer al entrar en la vista
        this.navbarFooterService.setNavbarVisible(false);
        this.navbarFooterService.setFooterVisible(false);
    }

    ngOnDestroy() {
        // Mostrar navbar y footer al salir de la vista
        this.navbarFooterService.setNavbarVisible(true);
        this.navbarFooterService.setFooterVisible(true);
    }

}
