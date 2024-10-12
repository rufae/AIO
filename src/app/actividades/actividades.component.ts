import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {bookmarkOutline, eye} from "ionicons/icons";
import {NavbarFooterService} from "../navbar-footer.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";

@Component({
    selector: 'app-actividades',
    templateUrl: './actividades.component.html',
    styleUrls: ['./actividades.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class ActividadesComponent  implements OnInit {

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router
    ) {
        addIcons({bookmarkOutline, eye});
    }

  ngOnInit() {}

}
