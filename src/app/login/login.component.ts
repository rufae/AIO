import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NavbarFooterService} from "../navbar-footer.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../Service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        CommonModule
    ]
})
export class LoginComponent  implements OnInit, OnDestroy {

    username = '';
    password = '';
    errorMessage = '';

    constructor(
        private navbarFooterService: NavbarFooterService,
        private router: Router,
        private authService: AuthService
    ) { }

    login() {
        this.authService.login(this.username, this.password).subscribe({
            next: (response: any) => {
                console.log("Usuario ID recibido:", response.usuarioId);
                this.authService.setusuarioId(response.usuarioId);
                this.router.navigate(['/home']);
            },
            error: (error) => {
                this.errorMessage = 'Usuario o contraseña incorrectos';
            },
        });
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
