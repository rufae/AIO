import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GrupoService } from '../Service/grupo.service';

@Component({
    selector: 'app-participantes',
    templateUrl: './participantes.component.html',
    styleUrls: ['./participantes.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        IonicModule,
        FormsModule,
        NgForOf
    ]
})
export class ParticipantesComponent implements OnInit {
    grupoId: number = 0;
    usuarioId: number = 0;

    constructor(private router: Router, private grupoService: GrupoService) { }

    ngOnInit() {}

    agregarParticipante(): void {
        this.grupoService.addParticipante(this.grupoId, this.usuarioId).subscribe({
            next: () => {
                console.log(`Participante ${this.usuarioId} agregado al grupo ${this.grupoId}`);
            },
            error: error => console.log('Error al agregar participante:', error)
        });
    }

    eliminarParticipante(): void {
        this.grupoService.removeParticipante(this.grupoId, this.usuarioId).subscribe({
            next: () => {
                console.log(`Participante ${this.usuarioId} eliminado del grupo ${this.grupoId}`);
            },
            error: error => console.log('Error al eliminar participante:', error)
        });
    }
}
