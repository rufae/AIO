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
import {NgForOf, NgIf} from "@angular/common";

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
        NgForOf,
        NgIf
    ]
})
export class ChatsComponent implements OnInit {
    grupos: Grupo[] = [];

    constructor(private router: Router, private grupoService: GrupoService) {
      addIcons({add});
    }

    crearGrupo(){
        this.router.navigate(['/newgroup']);
    }

    goToChatUnico() {
        this.router.navigate(['/chatunico']);
    }

    cargarGrupos(): void {
        this.grupoService.getGrupos().subscribe({
            next: grupos => {
                this.grupos = grupos;
                console.log('Datos:', grupos);
            },
            error: error => console.log('Error:', error),
            complete: () => {
                //this.cargarGrupos();
                console.log('Petición completada')
            }
        });
    }

    ngOnInit() {
        this.cargarGrupos();
    }

}
