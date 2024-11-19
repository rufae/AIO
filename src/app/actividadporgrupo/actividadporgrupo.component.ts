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
import {GrupoService} from "../Service/grupo.service";

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
    usuarioId: number = 1;
    grupo: any;
    grupoId!: number;

    constructor(
        private actividadService: ActividadService,
        private grupoService: GrupoService,
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

        this.route.paramMap.subscribe(params => {
            const id = params.get('grupoId');
            if (id) {
                this.grupoId = +id; // Se obtiene dinámicamente
                this.cargarGrupo();
                this.cargarActividades();
            } else {
                console.error('No se pudo obtener el grupoId de la URL');
            }
        });

    }

    cargarGrupo(): void {
        this.grupoService.getGrupoPorId(this.grupoId).subscribe({
            next: grupo => {
                this.grupo = grupo;
                console.log('Grupo cargado:', grupo);
            },
            error: error => {
                console.error('Error al cargar el grupo:', error);
                if (error.status === 404) {
                    console.error('El grupo no existe o la URL es incorrecta.');
                }
            },
            complete: () => console.log('Carga de grupo completada')
        });
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
