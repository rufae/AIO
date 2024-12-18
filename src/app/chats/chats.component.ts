import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {ActividadesComponent} from "../actividades/actividades.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {Router} from "@angular/router";
import { GrupoService } from '../Service/grupo.service';
import { Grupo } from '../Model/grupo.model';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UsuarioService} from "../Service/usuario.service";

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule,
        FormsModule,
        CommonModule
    ]
})
export class ChatsComponent implements OnInit {
    grupos: Grupo[] = [];
    usuarioId: number = 0;

    constructor(private router: Router,
                private grupoService: GrupoService,
                private usuarioService: UsuarioService)
    {
      addIcons({add});
    }

    ngOnInit() {
        this.usuarioId = this.usuarioService.getUsuarioId() || 0;
        console.log('Usuario ID:', this.usuarioId);

        if (this.usuarioId === 0) {
            console.log("Usuario no autenticado, redirigiendo a login...");
            this.router.navigate(['/login']);
        } else {
            this.cargarGruposDelUsuario();
        }
    }

    crearGrupo(){
        this.router.navigate(['/newgroup']);
    }

    goToChatUnico(grupoId: number) {
        this.router.navigate([`/chatunico/${grupoId}`]);
    }

    cargarGruposDelUsuario(): void {
        this.grupoService.getGruposPorUsuario(this.usuarioId).subscribe({
            next: grupos => {
                this.grupos = grupos;
                console.log('Grupos del usuario:', grupos);
            },
            error: error => {
                console.log('Error:', error);
                if (error.status === 404) {
                    this.grupos = [];
                }
            },
            complete: () => console.log('Petición completada')
        });
    }

}
