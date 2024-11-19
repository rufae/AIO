import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthService } from '../Service/auth.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class SettingsComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    goToLogin() {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    ngOnInit() { }

}
