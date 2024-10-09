import {Component, OnInit} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import { NavbarFooterService } from './navbar-footer.service';
import {NgIf} from "@angular/common";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
    imports: [IonApp, IonRouterOutlet, NavbarComponent, FooterComponent, NgIf],
})
export class AppComponent implements OnInit {
    navbarVisible = true;
    footerVisible = true;
    constructor(private navbarFooterService: NavbarFooterService) {}

    ngOnInit() {
        // Suscribirse a los cambios de visibilidad del navbar
        this.navbarFooterService.navbarVisible$.subscribe(visible => {
            this.navbarVisible = visible;
        });

        // Suscribirse a los cambios de visibilidad del footer
        this.navbarFooterService.footerVisible$.subscribe(visible => {
            this.footerVisible = visible;
        });
    }

}
