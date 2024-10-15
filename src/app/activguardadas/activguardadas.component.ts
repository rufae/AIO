import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from "@ionic/angular";
import {bookmark, bookmarkOutline, eye} from "ionicons/icons";
import { NavbarFooterService } from "../navbar-footer.service";
import { Router } from "@angular/router";
import { addIcons } from "ionicons";
import { OverlayEventDetail } from "@ionic/core/components";

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
        addIcons({ bookmark, eye });
    }

    @ViewChild(IonModal) modal!: IonModal;

    name!: string;

    openModal() {
        this.modal.present();
    }

    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }

    onWillDismiss(event: Event) {
        const ev = event as CustomEvent<OverlayEventDetail<string>>;
        if (ev.detail.role === 'confirm') {
            console.log('Confirmado:', ev.detail.data);
        }
    }

    ngOnInit(): void {
    }

}
