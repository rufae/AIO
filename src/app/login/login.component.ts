import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NavbarFooterService} from "../navbar-footer.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class LoginComponent  implements OnInit, OnDestroy {

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router,
    ) { }

    login(){

    }

    goToSearch() {
        this.router.navigate(['/home']);
    }

    goToForgotPassword() {
        this.router.navigate(['/forgot-password']);
    }


    goToRegister(){
        this.router.navigate(['/register'])
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
