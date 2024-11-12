import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../Service/grupo.service';
import { Usuario } from '../Model/usuario.model';
import { Grupo } from '../Model/grupo.model';  // Asegúrate de tener el modelo Grupo definido
import { NgForOf, NgIf } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-participantes',
    templateUrl: './participantes.component.html',
    styleUrls: ['./participantes.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        IonicModule,
        NgForOf,
        FormsModule
    ]
})
export class ParticipantesComponent implements OnInit {
    grupoId: number = 1;
    usuarioId: number = 3;
    participantesAAgregar: number[] = [];
    participantesAEliminar: number[] = [];

    listaParticipantes: Usuario[] = [];
    participantesGrupo: Usuario[] = [];

    constructor(private grupoService: GrupoService) { }

    ngOnInit() {
        this.cargarParticipantesGrupo();
        this.cargarListaParticipantes();
    }

    // Cargar participantes actuales del grupo
    cargarParticipantesGrupo() {
        this.grupoService.getParticipantesGrupo(this.grupoId).subscribe({
            next: (grupos: Grupo[]) => {
                const grupo = grupos[0];  // Accede al primer elemento de la lista
                if (grupo && grupo.usuarios) {
                    this.participantesGrupo = grupo.usuarios;
                    console.log('Participantes del grupo:', this.participantesGrupo);
                } else {
                    console.log('No se encontró el grupo o la propiedad usuarios');
                }
            },
            error: (error) => console.log('Error al cargar participantes del grupo:', error)
        });
    }

    // Cargar todos los participantes disponibles para agregar al grupo
    cargarListaParticipantes() {
        this.grupoService.getListaParticipantes(this.usuarioId).subscribe({
            next: (usuarios) => {
                this.listaParticipantes = usuarios;
                console.log('Lista de participantes disponibles:', this.listaParticipantes);
            },
            error: (error) => console.log('Error al cargar lista de participantes:', error)
        });
    }

    // Método para gestionar los participantes (agregar y eliminar)
    gestionarParticipantes() {
        // Agregar participantes
        this.participantesAAgregar.forEach((usuarioId) => {
            this.grupoService.addParticipante(this.grupoId, usuarioId).subscribe({
                next: () => {
                    console.log(`Participante ${usuarioId} agregado al grupo ${this.grupoId}`),
                    this.cargarParticipantesGrupo();
                },
                error: (error) => console.log(`Error al agregar participante ${usuarioId}:`, error)
            });
        });

        // Eliminar participantes
        this.participantesAEliminar.forEach((usuarioId) => {
            this.grupoService.removeParticipante(this.grupoId, usuarioId).subscribe({
                next: () => {
                    console.log(`Participante ${usuarioId} eliminado del grupo ${this.grupoId}`);
                    this.cargarParticipantesGrupo();
                },
                error: (error) => console.log(`Error al eliminar participante ${usuarioId}:`, error)
            });
        });

        // Limpiar las selecciones después de procesar
        this.participantesAAgregar = [];
        this.participantesAEliminar = [];
    }

    // Método para eliminar un participante específico (si usas botones individuales)
    eliminarParticipante(usuarioId: number) {
        this.grupoService.removeParticipante(this.grupoId, usuarioId).subscribe({
            next: () => {
                console.log(`Participante ${usuarioId} eliminado del grupo ${this.grupoId}`);
                this.cargarParticipantesGrupo();  // Actualizar la lista después de eliminar
            },
            error: (error) => console.log(`Error al eliminar participante ${usuarioId}:`, error)
        });
    }

}
