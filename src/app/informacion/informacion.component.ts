import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from '../Service/grupo.service';
import { Grupo } from '../Model/grupo.model';
import { IonicModule } from '@ionic/angular';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {ActividadesComponent} from "../actividades/actividades.component";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-informacion',
    templateUrl: './informacion.component.html',
    styleUrls: ['./informacion.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule,
        CommonModule
    ]
})
export class InformacionComponent implements OnInit {
    grupoId: number = 0;
    grupo: Grupo = {
        grupoId: 0,
        nombre: '',
        descripcion: '',
        fechaCreacion: '',
        imagen: '',
        usuarios: []
    };

    constructor(
        private grupoService: GrupoService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('grupoId');
        console.log('Grupo ID obtenido de la URL:', id);
        if (id) {
            this.grupoId = Number(id);
            this.cargarGrupo();
        } else {
            console.error('No se pudo obtener el grupoId de la URL');
        }
    }
    cargarGrupo(): void {
        this.grupoService.getGrupoPorId(this.grupoId).subscribe({
            next: grupo => {
                this.grupo = grupo;
                console.log('Grupo cargado:', grupo);
            },
            error: error => {
                console.log('Error al cargar el grupo:', error);
                if (error.status === 404) {
                    console.error('El grupo no existe o la URL es incorrecta.');
                }
            },
            complete: () => console.log('Carga de grupo completada')
        });
    }
}
