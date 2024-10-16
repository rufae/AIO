import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import { register } from 'swiper/element/bundle';
import {NgForOf} from "@angular/common";

register();

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioComponent implements OnInit {


    cards = [
        {
            title: 'Explora Destinos',
            content: 'Descubre lugares increíbles y planifica tu próxima aventura fácilmente.'
        },
        {
            title: 'Conéctate con Amigos',
            content: 'Crea grupos de chat para compartir tus experiencias y coordinar viajes.'
        },
        {
            title: 'Organiza tu Itinerario',
            content: 'Planifica actividades, encuentra alojamientos y disfruta de tus vacaciones sin preocupaciones.'
        }
    ];

  constructor(private router: Router) { }

    goToLogin(){
        this.router.navigate(["/login"])
    }

  ngOnInit() {}

}
