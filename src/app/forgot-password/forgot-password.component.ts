import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NavbarFooterService} from "../navbar-footer.service";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class ForgotPasswordComponent  implements OnInit, OnDestroy {

  constructor(
        private router: Router,
        private navbarFooterService: NavbarFooterService,
  ) { }

    goToSearch(){
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
