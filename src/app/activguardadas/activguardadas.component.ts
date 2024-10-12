import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarFooterService} from "../navbar-footer.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {shareSocial, bookmark} from "ionicons/icons";

@Component({
    selector: 'app-activguardadas',
    templateUrl: './activguardadas.component.html',
    styleUrls: ['./activguardadas.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class ActivguardadasComponent  implements OnInit {

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router
    ) {
        addIcons({shareSocial, bookmark});
    }

  ngOnInit() {}

}
