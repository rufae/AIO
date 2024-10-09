import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavbarFooterService {
    private navbarVisible = new BehaviorSubject<boolean>(true);
    private footerVisible = new BehaviorSubject<boolean>(true);

    // Observables para el estado
    navbarVisible$ = this.navbarVisible.asObservable();
    footerVisible$ = this.footerVisible.asObservable();

    // Métodos para cambiar la visibilidad
    setNavbarVisible(visible: boolean) {
        this.navbarVisible.next(visible);
    }

    setFooterVisible(visible: boolean) {
        this.footerVisible.next(visible);
    }
}
