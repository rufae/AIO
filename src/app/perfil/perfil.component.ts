import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { UsuarioService } from '../Service/usuario.service';
import { AuthService } from '../Service/auth.service';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule
    ]
})
export class PerfilComponent implements OnInit {
    usuario: any = {};
    grupos: any[] = [];

    constructor(
        private usuarioService: UsuarioService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        const usuarioId = this.authService.getusuarioId();
        if (usuarioId) {
            // Obtener datos del usuario
            this.usuarioService.getUsuarioById(usuarioId).subscribe((data) => {
                this.usuario = data;
            });

            // Obtener grupos del usuario
            this.usuarioService.getGruposByUsuarioId(usuarioId).subscribe((data) => {
                this.grupos = data;
            });
        }
    }
}
