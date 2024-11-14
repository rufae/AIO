import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ActividadService } from '../Service/actividad.service';
import { ActividadConVotosDTO } from '../Model/actividad-con-votos.model';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ActividadesComponent } from "../actividades/actividades.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {VotoService} from "../Service/voto.service";

@Component({
    selector: 'app-actividadporgrupo',
    templateUrl: './actividadporgrupo.component.html',
    standalone: true,
    styleUrls: ['./actividadporgrupo.component.scss'],
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule,
        CommonModule
    ]
})
export class ActividadporgrupoComponent implements OnInit {
    actividades: ActividadConVotosDTO[] = [];
    grupoId: number = 1;
    usuarioId: number = 1;

    constructor(
        private actividadService: ActividadService,
        private route: ActivatedRoute,
        private router: Router,
        private votoService: VotoService
    ) {
        addIcons({add});
        const grupoIdFromQuery = this.route.snapshot.queryParamMap.get('grupoId');
        if (grupoIdFromQuery) {
            this.grupoId = +grupoIdFromQuery;
        }
    }

    ngOnInit() {
        this.cargarActividades();
    }

    agregarActividad(){
        this.router.navigate(["/proponer-actividad"])
    }

    cargarActividades() {
        this.actividadService.obtenerActividadesPorGrupo(this.grupoId).subscribe({
            next: actividades => {
                this.actividades = actividades;

                // Verifica si el usuario ya votó en cada actividad
                this.actividades.forEach(actividad => {
                    this.votoService.checkVoto(actividad.actividadId, this.usuarioId).subscribe(yaVoto => {
                        actividad.yaVoto = yaVoto;
                    });
                });
            },
            error: error => {
                console.error('Error al cargar actividades:', error);
            }
        });
    }

    votarActividad(actividadId: number, votoAFavor: boolean) {
        this.actividadService.votarActividad(actividadId, this.usuarioId, votoAFavor).subscribe({
            next: () => {
                this.cargarActividades(); // Recargar las actividades después de votar
            },
            error: error => {
                console.error('Error al votar actividad:', error);
            }
        });
    }
}
