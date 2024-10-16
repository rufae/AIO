import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class InicioComponent  implements OnInit {

  constructor(private router: Router) { }

    goToLogin(){
        this.router.navigate(["/login"])
    }

  ngOnInit() {}

}
