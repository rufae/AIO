import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-crearitineario',
    templateUrl: './crearitinerario.component.html',
    styleUrls: ['./crearitinerario.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class CrearItinerarioComponent {
    actividades = []; // Lista de actividades disponibles (cargar desde la base de datos)
    actividadesSeleccionadas = []; // Lista de actividades seleccionadas

    constructor() {}

    buscarActividades(event: any) {
        const query = event.target.value.toLowerCase();
        // Implementar la búsqueda de actividades en la base de datos según el 'query'
    }

    agregarActividad(actividad: any) {
        this.actividadesSeleccionadas.push();
    }

    eliminarActividad(actividad: any) {
        this.actividadesSeleccionadas = this.actividadesSeleccionadas.filter(
            a => a !== actividad
        );
    }
}
