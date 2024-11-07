import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../Service/grupo.service';
import { Grupo } from '../Model/grupo.model';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-prueba',
    templateUrl: './prueba.component.html',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        IonicModule
    ],
    styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
    grupos: Grupo[] = [];
    nuevoGrupo: Grupo = { grupoId: 0, nombre: '', descripcion: '', fechaCreacion: '', usuarios: [] };

    constructor(private grupoService: GrupoService) { }

    ngOnInit(): void {
        this.cargarGrupos();
    }

    cargarGrupos(): void {
        this.grupoService.getGrupos().subscribe({
            next: grupos => {
                this.grupos = grupos;
                console.log('Datos:', grupos);
            },
            error: error => console.log('Error:', error),
            complete: () => console.log('Petición completada')
        });
    }


    agregarGrupo(): void {
        this.grupoService.addGrupo(this.nuevoGrupo).subscribe({
            next: grupo => {
                console.log('Grupo agregado:', grupo);
                this.cargarGrupos();
            },
            error: error => console.log('Error:', error),
            complete: () => console.log('Petición completada')
        });
    }

}
