import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionSheetController, IonicModule} from "@ionic/angular";
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
        private router: Router,
        private actionSheetController: ActionSheetController
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

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Opciones',
            buttons: [
                {
                    text: 'Proponer Actividad',
                    handler: () => {
                        console.log('Votar Actividad seleccionada');
                        this.router.navigate(["/actividadporgrupo"])
                    },
                },
                {
                    text: 'Generar Itinerario',
                    handler: () => {
                        this.router.navigate(["/crearitinerario"])
                    },
                },
                {
                    text: 'Participantes',
                    handler: () => {
                        console.log('participantes seleccionado');
                        this.router.navigate(["/participantes"])
                    },
                },
                {
                    text: 'Info del grupo',
                    handler: () => {
                        console.log('información seleccionada');
                        const grupoId: number = 1;
                        this.router.navigate([`/informacion/${grupoId}`])
                    },
                }
            ],
        });
        await actionSheet.present();
    }
}
