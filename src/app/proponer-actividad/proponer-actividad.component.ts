import {Component, OnInit} from '@angular/core';
import { ActividadService } from '../Service/actividad.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TipoActividad } from '../Model/tipo-actividad.enum';
import { NgForOf } from '@angular/common';

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
        grupo_id: null,
        calidad: '',
        distancia: '',
        pais: '',
        region: '',
        resenas: '',
        tipoActividad: '',
        guardada: false
    };

    tiposActividad = Object.values(TipoActividad);

    constructor(private actividadService: ActividadService, private router: Router) { }

    crearActividad() {
        const usuarioId = 1;
        const grupoId = this.actividad.grupo_id;

        if (!grupoId) {
            console.error('grupoId no definido');
            return;
        }

        this.actividadService.crearActividad(this.actividad, usuarioId).subscribe({
            next: (response) => {
                console.log('Actividad creada:', response);
                this.router.navigate(['/actividadporgrupo', grupoId]);
            },
            error: (error) => {
                console.error('Error al crear actividad:', error);
            }
        });
    }


    ngOnInit(){
        console.log('Tipos de Actividad:', this.tiposActividad);
    }
}
