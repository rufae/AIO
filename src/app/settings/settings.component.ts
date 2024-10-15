import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class SettingsComponent  implements OnInit {

  constructor(private router: Router) { }

    goToLogin(){
      this.router.navigate(["/login"])
    }

  ngOnInit() {}

}
