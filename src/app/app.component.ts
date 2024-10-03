import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
    imports: [IonApp, IonRouterOutlet, NavbarComponent, FooterComponent],
})
export class AppComponent {
  constructor() {}

}
