import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class RegisterComponent  implements OnInit {

    constructor(private router: Router) { }

    register(){

    }

    goToSearch() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {}

}
