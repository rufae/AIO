import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NavbarFooterService} from "../navbar-footer.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class RegisterComponent  implements OnInit, OnDestroy {

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router,
    ) { }

    register(){

    }

    goToSearch() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        // Ocultar navbar y footer al entrar en la vista
        this.navbarFooterService.setFooterVisible(false);
    }

    ngOnDestroy() {
        // Mostrar navbar y footer al salir de la vista
        this.navbarFooterService.setNavbarVisible(true);
        this.navbarFooterService.setFooterVisible(true);
    }

}
