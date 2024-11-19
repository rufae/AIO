import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { GrupoService } from '../Service/grupo.service';
import { Grupo } from '../Model/grupo.model';

@Component({
    selector: 'app-newgroup',
    templateUrl: './newgroup.component.html',
    styleUrls: ['./newgroup.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        IonicModule,
        NgForOf,
        FormsModule
    ]
})
export class NewgroupComponent implements OnInit {
    usuarioId: number = 1;
    grupos: Grupo[] = [];
    nuevoGrupo: Grupo = { grupoId: 0, nombre: '', descripcion: '', fechaCreacion: '', imagen: '' , usuarios: [] };

  constructor(private router: Router, private grupoService: GrupoService) { }

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
        this.grupoService.addGrupo(this.nuevoGrupo, this.usuarioId).subscribe({
            next: grupo => {
                console.log('Grupo agregado:', grupo);
                this.nuevoGrupo.nombre = '';
                this.nuevoGrupo.descripcion = '';
                this.nuevoGrupo.imagen = '';
                this.router.navigate(['/chats']);
            },
            error: error => console.log('Error:', error),
            complete: () => {

                console.log('Petición completada')
            }
        });
    }

  ngOnInit() {
      this.cargarGrupos();
  }

}
