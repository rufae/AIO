import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {ActividadesComponent} from "../actividades/actividades.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        ActividadesComponent,
        IonicModule
    ]
})
export class ChatsComponent  implements OnInit {

    constructor(private router: Router) {
      addIcons({add});
    }

    goToChatUnico() {
        this.router.navigate(['/chatunico']);
    }

    ngOnInit() {}

}
