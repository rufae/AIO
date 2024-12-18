import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, IonicModule } from "@ionic/angular";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ActividadesComponent } from "../actividades/actividades.component";
import { NavbarFooterService } from '../navbar-footer.service';
import { addIcons } from "ionicons";
import { attach, videocamOutline, arrowUndo, ellipsisVertical, mic } from "ionicons/icons";
import { Router } from '@angular/router';
import {GrupoService} from "../Service/grupo.service";

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
    grupoId: number | null = null;
    grupo: any = {};

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router,
        private actionSheetController: ActionSheetController,
        private route: ActivatedRoute,
        private grupoService: GrupoService,
    ) {
        addIcons({ videocamOutline, attach, arrowUndo, ellipsisVertical, mic });
    }

    ngOnInit() {
        // Obtener el grupoId de la URL
        this.route.paramMap.subscribe(params => {
            const id = params.get('grupoId');
            if (id) {
                this.grupoId = +id;
                this.loadGrupoData();
            } else {
                console.error('No se pudo obtener el grupoId de la URL');
            }
        });

        // Ocultar navbar y footer al entrar en la vista
        this.navbarFooterService.setNavbarVisible(false);
        this.navbarFooterService.setFooterVisible(false);
    }

    ngOnDestroy() {
        // Mostrar navbar y footer al salir de la vista
        this.navbarFooterService.setNavbarVisible(true);
        this.navbarFooterService.setFooterVisible(true);
    }

    loadGrupoData() {
        console.log('Cargando grupo con id:', this.grupoId);
        if (this.grupoId) {
            this.grupoService.getGrupoPorId(this.grupoId).subscribe({
                next: (grupoData) => {
                    this.grupo = grupoData;
                    console.log('Grupo cargado:', this.grupo);
                },
                error: (error) => {
                    console.error('Error al cargar el grupo:', error);
                }
            });
        }
    }

    goToChat() {
        this.router.navigate(['/chats']);
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Opciones',
            buttons: [
                {
                    text: 'Proponer/Votar Actividad',
                    handler: () => {
                        console.log('Votar Actividad seleccionada');
                        this.router.navigate([`/actividadporgrupo/${this.grupoId}`]);
                    },
                },
                {
                    text: 'Generar Itinerario',
                    handler: () => {
                        this.router.navigate(["/crearitinerario"]);
                    },
                },
                {
                    text: 'Participantes',
                    handler: () => {
                        console.log('Participantes seleccionado');
                        this.router.navigate([`/participantes/${this.grupoId}`]);
                    },
                },
                {
                    text: 'Info del grupo',
                    handler: () => {
                        console.log('Información seleccionada');
                        this.router.navigate([`/informacion/${this.grupoId}`]);
                    },
                }
            ],
        });
        await actionSheet.present();
    }
}
