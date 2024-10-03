import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {ActividadesComponent} from "../actividades/actividades.component";
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-infoactividades',
    templateUrl: './infoactividades.component.html',
    styleUrls: ['./infoactividades.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule
    ]
})
export class InfoactividadesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
