import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class FooterComponent  implements OnInit {

    constructor(private router: Router) {}

    goToSearch() {
        this.router.navigate(['/home']);
    }

    goToChat() {
        this.router.navigate(['/chats']);
    }

    goToBookmarks() {
        this.router.navigate(['/paginaguardados']); // Cambia '/bookmarks' a la ruta correcta
    }

    ngOnInit(): void {
    }

}
