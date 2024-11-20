import {Component, OnInit} from '@angular/core';
import { ActividadService } from '../Service/actividad.service';
import {ActivatedRoute, Router} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TipoActividad } from '../Model/tipo-actividad.enum';
import { NgForOf } from '@angular/common';
import {UsuarioService} from "../Service/usuario.service";

@Component({
    selector: 'app-proponer-actividad',
    templateUrl: './proponer-actividad.component.html',
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgForOf
    ],
    styleUrls: ['./proponer-actividad.component.scss']
})
export class ProponerActividadComponent implements OnInit{

    actividad = {
        grupo_id: null as number | null,
        calidad: '',
        distancia: '',
        pais: '',
        region: '',
        resenas: '',
        tipoActividad: '',
        guardada: false
    };

    tiposActividad = Object.values(TipoActividad);
    usuarioId!: number;
    grupoId!: number;

    constructor(
        private actividadService: ActividadService,
        private router: Router,
        private route: ActivatedRoute,
        private usuarioService: UsuarioService
    ) { }

    ngOnInit() {
        // Obtener usuarioId desde UsuarioService
        const usuarioId = this.usuarioService.getUsuarioId();
        if (!usuarioId) {
            console.error('Usuario no logueado');
            return;
        }
        this.usuarioId = usuarioId;

        // Obtener grupoId desde los parámetros de la ruta
        this.route.paramMap.subscribe(params => {
            const id = params.get('grupoId');
            if (id) {
                this.grupoId = +id;
                this.actividad.grupo_id = this.grupoId; // Asignar grupoId al objeto actividad
            } else {
                console.error('No se pudo obtener el grupoId de la URL');
            }
        });

        console.log('Tipos de Actividad:', this.tiposActividad);
    }

    crearActividad() {
        if (!this.grupoId) {
            console.error('grupoId no definido');
            return;
        }

        this.actividadService.crearActividad(this.actividad, this.usuarioId).subscribe({
            next: (response) => {
                console.log('Actividad creada:', response);
                this.router.navigate(['/actividadporgrupo', this.grupoId]);
            },
            error: (error) => {
                console.error('Error al crear actividad:', error);
            }
        });
    }



}
